from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool
from datetime import datetime

class Error(BaseModel):
    message: str

class commentIn(BaseModel):
    post_id: int
    comments: str
    user_id: int
    created_on: datetime

class commentOut(BaseModel):
    id: int
    post_id: int
    comments: str
    user_id: int
    created_on: datetime


class CommentsRepository:
    def create(self, comment: commentIn) -> commentOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO comments
                            (post_id, comments, user_id, created_on)
                        Values
                            (%s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            comment.post_id,
                            comment.comments,
                            comment.user_id,
                            comment.created_on
                        ]
                    )
                    id = result.fetchone()[0]
                    old_data = comment.dict()
                    return commentOut(id=id, **old_data)
        except Exception as e:
            print(e)
            return "Could not create comment"

    def get_all(self) -> List[commentOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, post_id, comments, user_id, created_on
                        FROM comments;
                        """
                    )
                    result = []
                    for record in db:
                        comment = commentOut(
                            id=record[0],
                            post_id=record[1],
                            comments=record[2],
                            user_id=record[3],
                            created_on=record[4]
                        )
                        result.append(comment)
                    return result
        except Exception as e:
            print(e)
            return {"message": "could not get all comments"}


    # def get_one(self, post_id: int) -> commentOutpost:
    #     try:
    #         with pool.connection() as conn:
    #             with conn.cursor() as db:
    #                 result = db.execute(
    #                     """
    #                     SELECT comments.id, comments.post_id, comments.comments,
    #                     FROM comments
    #                     WHERE comments.post_id = %s
    #                     """,
    #                     [post_id],
    #                 )
    #                 record = result.fetchone()
    #                 if record is None:
    #                     return {"message": "Post id not found"}
    #                 return self.record_in_to_out(record)
    #     except Exception as e:
    #         print(e)
    #         return {"message": "could not get post"}

    # def record_in_to_out(self, record):
    #     return commentOutpost(
    #         id=record[0],
    #         post_id=record[1],
    #         comments=record[2],
    #         )
