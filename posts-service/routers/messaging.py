from fastapi import APIRouter, Depends
from queries.messaging import messageIn, messageOut, MessageRepository, messageThreadIn, messageThreadOut




router = APIRouter()


@router.post("/create_message", tags=["messages"])
def new_message(
    message: messageIn,
    repo: MessageRepository = Depends(),):
    return repo.create_message(message)

@router.get("/messages/{user_id}", tags=["messages"])
def all_messages_by_id(
    user_id: int,
    repo: MessageRepository = Depends(),
    ):
    return repo.get_all_messages_by_id(user_id)

@router.post("/create_thread", tags={"messages"})
def new_thread(
    message_thread: messageThreadIn,
    repo: MessageRepository = Depends(),):
    return repo.create_thread(message_thread)

@router.post("/threads/{user_id}", tags={"messages"})
def all_threads_by_id(
    user_id: int,
    repo: MessageRepository = Depends(),
):
    return repo.get_all_threads_by_id(user_id)
