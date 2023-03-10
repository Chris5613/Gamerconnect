from pydantic import BaseModel
from typing import List, Union
from queries.pool import pool
from datetime import datetime

class Error(BaseModel):
    message: str

class messageId(BaseModel):
    user_id: int

class messageIn(BaseModel):
    user_id: int
    message: str

class messageOut(BaseModel):
    id: int
    user_id: int
    message: str
    sent: datetime

class messageThreadIn(BaseModel):
    user_id: int
    second_user_id: int
    message_id: int

class messageThreadOut(BaseModel):
    id: int
    user_id: int
    second_user_id: int
    message_id: int


class MessageRepository:
    def create_message(self, message: messageIn) -> messageOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO message
                            (user_id, message, sent)
                        Values
                            (%s, %s, DEFAULT)
                        RETURNING id, sent;
                        """,
                        [
                        message.user_id,
                        message.message,
                        ]
                    )
                    res = result.fetchone()
                    print("HERE--------!!", res)
                    id = res[0]
                    sent1 = res[1]
                    print("HEREEEE!!!!", id)
                    # new_sent = sent1.strftime('%m/%d/%Y, %H:%M:%S')
                    print("AQUIIIII!!!!", sent1)
                    return messageOut(
                    id=id,
                    user_id=message.user_id,
                    message=message.message,
                    sent=sent1
                    )
        except Exception as e:
            print(e)
            return "could not create message"

    def get_all_messages_by_id(self, user_id: int,) -> Union[Error, List[messageOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                        , user_id
                        , message
                        , sent
                        FROM message
                        WHERE user_id = %s;
                        """,
                        [user_id]
                    )
                    print("HELLOOO!!", db)
                    print("HIOOOOOOO!!!!", result)
                    result = []
                    for record in db:
                        print("TTTTTTTT", record[2])
                        result.append(messageOut(
                            id=record[0],
                            user_id=user_id,
                            message=record[2],
                            sent=record[3],
                        ))
                    print("HEREEE_!!!", result)
                    return result
        except Exception as e:
            print(e)
            return "could not get all messages by that ID"



    def create_thread(self, message_thread: messageThreadIn) -> messageThreadOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO message_thread
                            (user_id, second_user_id, message_id)
                        Values
                            (%s, %s, %s)
                        RETURNING id;
                        """,
                        [
                        message_thread.user_id,
                        message_thread.second_user_id,
                        message_thread.message_id
                        ]
                    )
                    id = result.fetchone()[0]
                    return messageThreadOut(
                        id=id,
                        user_id=message_thread.user_id,
                        second_user_id=message_thread.second_user_id,
                        message_id=message_thread.message_id
                    )
        except Exception as e:
            print(e)
            return "could not create message thread"


    def get_all_threads_by_id(self, user_id: int,) -> Union[Error, List[messageThreadOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                        , user_id
                        , second_user_id
                        , message_id
                        FROM message_thread
                        WHERE user_id = %s;
                        """,
                        [user_id]
                    )
                    print("HELLOOO!!", db)
                    print("HIOOOOOOO!!!!", result)
                    result = []
                    for record in db:
                        print("TTTTTTTT", record[2])
                        result.append(messageThreadOut(
                        id=record[0],
                        user_id=record[1],
                        second_user_id=record[2],
                        message_id=record[3]
                    ))
                    print("HEREEE_!!!", result)
                    return result
        except Exception as e:
            print(e)
            return "could not get all messages by that ID"
