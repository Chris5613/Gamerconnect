from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool

class Error(BaseModel):
    message: str

class commentIn(BaseModel):
    comments: str

class commentOut(BaseModel):
    id: int
    comments: str

class CommentsRepository:
    def create(self, comment: commentIn) -> commentOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO comments
                            (comments)
                        Values
                            (%s)
                        RETURNING id;
                        """,
                        [
                            comment.comments
                        ]
                    )
                    id = result.fetchone()[0]
                    old_data = comment.dict()
                    return commentOut(id=id, **old_data)
        except Exception as e:
            print(e)
            return "Could not create comment"
