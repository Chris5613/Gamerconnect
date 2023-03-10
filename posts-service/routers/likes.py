from fastapi import APIRouter, Depends, HTTPException
from typing import List, Union
from auth import authenticator
from queries.likes import LikesRepository, Message, Likes


router = APIRouter()


@router.post("/like/{post_id}/{user_id}", response_model=Message, tags=["Likes"])
def like_post(
    post_id: int,
        user_id: int,
        repo: LikesRepository = Depends()
        ):
    return repo.like_post(post_id, user_id)


@router.get("/likes/{post_id}", tags=["Likes"])
def get_likes(
    post_id: int,
        repo: LikesRepository = Depends()
        ):
    return repo.get_likes_by_postid(post_id)

@router.get("/likes", response_model=Union[Message, List[Likes]], tags=["Likes"])
def get_all_likes(
        repo: LikesRepository = Depends()
        ):
    return repo.get_all()
