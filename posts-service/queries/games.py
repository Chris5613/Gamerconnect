from pydantic import BaseModel
from typing import List
from queries.pool import pool


class Error(BaseModel):
    message: str


class GamesIn(BaseModel):
    title: str


class GamesOut(BaseModel):
    id: int
    title: str


class GamesRepository:
    def get_games(self) -> List[GamesOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id, title
                        FROM games
                        """
                    )
                    result = []
                    for record in db:
                        game = GamesOut(id=record[0], title=record[1])
                        result.append(game)
                    return result
        except Exception:
            return {"message": "Could not retrieve games"}

    def create(self, game: GamesIn) -> GamesOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO games
                            (title)
                        VALUES
                            (%s)
                        RETURNING id;
                        """,
                        [
                            game.title,
                        ]
                    )
                    id = result.fetchone()[0]
                    return GamesOut(id=id, title=game.title)
        except Exception as e:
            print(e)
            return "Could not create game"
