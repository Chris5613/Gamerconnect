from pydantic import BaseModel
from typing import Optional
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
