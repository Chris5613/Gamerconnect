from pydantic import BaseModel
from queries.pool import pool


# User sign up
class UserIn(BaseModel):
    username: str
    password: str
    email: str


class UserOut(BaseModel):
    id: str
    username: str
    email: str


class UserRepository:
    def create(self, user: UserIn) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                        INSERT INTO users
                            (username,user_password,email)
                        VALUES
                            (%s,%s,%s)
                        RETURNING id;
                    """,
                    [
                        user.username,
                        user.password,
                        user.email,
                    ]
                )
                id = result.fetchone()[0]
                old_data = user.dict()
                return UserOut(id=id,**old_data)
