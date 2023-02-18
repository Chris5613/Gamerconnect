from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool


class postIn(BaseModel):
    title: str
    description: str
    picture_url: Optional[str]
    user_id: int
    game_id: int

class postOut(BaseModel):
    id: int
    title: str
    description: str
    picture_url: Optional[str]
    user_id: int
    game_id: int


class PostRepository:
    def get_all(self) -> List[postOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, title, description, picture_url, user_id, game_id
                        FROM post
                        """
                    )
                    result = []
                    for record in db:
                        post = postOut(
                            id=record[0],
                            title=record[1],
                            description=record[2],
                            picture_url=record[3],
                            user_id=record[4],
                            game_id=record[5],

                        )
                        result.append(post)
                    return result
        except Exception:
            return {"message": "could not get all posts"}


    def create(self, post: postIn) -> postOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO post
                        (title, description, picture_url, user_id, game_id)
                    Values
                        (%s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        post.title,
                        post.description,
                        post.picture_url,
                        post.user_id,
                        post.game_id
                    ]
                )
                id = result.fetchone()[0]
                old_data = post.dict()
                return postOut(id=id, **old_data)


    def delete(self,post_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM post
                        WHERE id = %s
                        """,
                        [post_id],
                    )
                    return {"deleted":True}
        except Exception as e:
            print(e)
            return {"Could not be deleted"}
