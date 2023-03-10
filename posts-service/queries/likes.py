from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool


class Message(BaseModel):
    message: str


class Likes(BaseModel):
    postid: int
    num_likes: int


class LikesRepository:
    def like_post(self, post_id: int, user_id: int) -> Message:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        INSERT INTO likes
                            (user_id, post_id)
                        Values
                            (%s, %s)
                        """,
                        [
                            user_id,
                            post_id
                        ]
                    )
                    return {"message": "You have liked the post"}
        except Exception as e:
            print(e)
            return {"message": "Could not like post"}

    def get_likes_by_postid(self, post_id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        select COUNT(*)
                        from likes
                        where post_id = %s
                        """,
                        [post_id]
                    )
                    return result.fetchone()
        except Exception as e:
            print(e)
            return {"message": "Could get number of likes"}

    def get_all(self) -> Union[Message, List[Likes]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        select post.id, COUNT(*)
                        from likes
                        left join post
                        on post.id = likes.post_id
                        group by post.id
                        """
                    )
                    result = [Likes(
                            postid=record[0],
                            num_likes=record[1],
                        ) for record in db]
                    return result
        except Exception as e:
            print(e)
            return {"message": "Could get number of likes"}

    def unlike_post(self, post_id: int, user_id: int):
        pass
