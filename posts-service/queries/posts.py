from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool


class Error(BaseModel):
    message: str
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
    user_id: str
    game_id: str

class postOutUsername(BaseModel):
    id: int
    title: str
    description: str
    picture_url: Optional[str]
    username: str
    game: str


class PostRepository:
    def get_all(self) -> List[postOutUsername]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT post.id, post.title, post.description, post.picture_url, users.username, games.title, post.user_id, post.game_id
                        FROM post
                        LEFT JOIN users
                        ON post.user_id = users.id
                        LEFT JOIN games
                        ON post.game_id = games.id
                        """
                    )
                    result = []
                    for record in db:
                        post = postOutUsername(
                            id=record[0],
                            title=record[1],
                            description=record[2],
                            picture_url=record[3],
                            username=record[4],
                            game=record[5],

                        )
                        result.append(post)
                    return result
        except Exception:
            return {"message": "could not get all posts"}

    def get_one(self, post_id: int) -> postOutUsername:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT post.id, post.title, post.description, post.picture_url, users.username, games.title, post.user_id, post.game_id
                        FROM post
                        LEFT JOIN users
                        ON post.user_id = users.id
                        LEFT JOIN games
                        ON post.game_id = games.id
                        WHERE post.id = %s
                        """,
                        [post_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return {"message": "There is no post with that post_id"}
                    return self.record_in_to_out(record)
        except Exception as e:
            print(e)
            return {"message": "could not get post"}


    def create(self, post: postIn) -> postOut:
        try:
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
        except Exception as e:
            print(e)
            return "Could not create post"


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

    def get_byuserid(self, users_id: int) -> Union[Error, List[postOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , title
                            , description
                            , picture_url
                            , user_id
                            , game_id
                        FROM post
                        """,
                    )
                    result = [postOut(
                            id=record[0],
                            title=record[1],
                            description=record[2],
                            picture_url=record[3],
                            user_id=record[4],
                            game_id=record[5]
                        ) for record in db if record[4] == users_id]
                    return result

        except Exception as e:
            print(e)
            return {"Could not get user's posts"}

    def get_by_game_id(self, games_id: int) -> Union[Error, List[postOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , title
                            , description
                            , picture_url
                            , user_id
                        FROM post
                        where game_id = %s
                        """,
                        [games_id]
                    )
                    result = [postOut(
                            id=record[0],
                            title=record[1],
                            description=record[2],
                            picture_url=record[3],
                            user_id=record[4],
                            game_id=games_id
                        ) for record in db]
                    return result

        except Exception as e:
            print(e)
            return {"Could not get this game's posts"}

    def post_into_out(self, id: int, post: postOut):
        old_data = post.dict()
        return postOut(id=id, **old_data)

    def record_in_to_out(self, record):
        return postOutUsername(
            id=record[0],
            title=record[1],
            description=record[2],
            picture_url=record[3],
            username=record[4],
            game=record[5],
            )

    def update(self, post_id: int, post: postIn) -> postOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE post
                        SET title = %s
                            , description = %s
                            , picture_url = %s
                            , user_id = %s
                            , game_id = %s
                        WHERE id = %s
                        """,
                        [
                            post.title,
                            post.description,
                            post.picture_url,
                            post.user_id,
                            post.game_id,
                            post_id

                        ]
                    )
                    old_data = post.dict()
                    return postOut(id=post_id, **old_data)
        except Exception:
            return {"message": "could not update post"}
