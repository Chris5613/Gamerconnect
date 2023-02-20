from pydantic import BaseModel
from queries.pool import pool


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
                return self.user_into_out(id,user)


    def delete(self, user_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        DELETE FROM users
                        WHERE id = %s
                        RETURNING id
                        """,
                        [user_id]
                    )
                    id = result.fetchone()[0]
                    return {f"User {id} deleted": True}
        except Exception as e:
            print(e)
            return {"User deleted": False}

    def update(self, user_id:int, user: UserIn) -> UserOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE users
                        SET username = %s
                            , user_password = %s
                            , email =  %s
                        WHERE id =  %s
                        """,
                        [
                            user.username,
                            user.password,
                            user.email,
                            user_id
                        ]
                    )
                    return self.user_into_out(user_id,user)
        except Exception as e:
            print(e)
            return {"User has not been updated"}


    def user_into_out(self,id:int, user:UserOut):
        old_data = user.dict()
        return UserOut(id=id, **old_data)
