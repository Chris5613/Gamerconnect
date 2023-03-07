from fastapi import APIRouter, Depends, HTTPException
from typing import List, Union
from queries.posts import (
    postIn,
    PostRepository,
    postOut,
    Error,
    postOutUsername
    )
from auth import authenticator


router = APIRouter()


@router.post("/post", tags=["Posts"])
def create_post(
    post: postIn,
        repo: PostRepository = Depends(),
        account_data:
        dict = Depends(authenticator.get_current_account_data),):
    if account_data:
        return repo.create(post)
    else:
        return HTTPException(status_code=401, detail="Invalid Token")


@router.delete("/post/{post_id}", tags=["Posts"])
def delete_post(
    post_id: int,
        repo: PostRepository = Depends(),
        account_data:
        dict = Depends(authenticator.get_current_account_data),):
    if account_data:
        return repo.delete(post_id)
    else:
        return HTTPException(status_code=401, detail="Invalid Token")


@router.get("/posts", response_model=List[postOutUsername], tags=["Posts"])
def get_all_post(
    repo: PostRepository = Depends(),
    account_data:
        dict = Depends(authenticator.get_current_account_data),):
    if account_data:
        return repo.get_all()
    else:
        return HTTPException(status_code=401, detail="Invalid Token")


@router.get("/getpost/{post_id}",
            response_model=Union[postOutUsername, Error],
            tags=["Posts"])
def get_post(
    post_id: int,
        repo: PostRepository = Depends(),
        account_data:
        dict = Depends(authenticator.get_current_account_data),):
    if account_data:
        return repo.get_one(post_id)
    else:
        return HTTPException(status_code=401, detail="Invalid Token")


@router.get("/post/user/{users_id}",
            response_model=Union[List[postOut], Error],
            tags=["Posts"])
def get_post_by_user_id(
    users_id: int,
        repo: PostRepository = Depends(),
        account_data:
        dict = Depends(authenticator.get_current_account_data),):
    if account_data:
        return repo.get_byuserid(users_id)
    else:
        return HTTPException(status_code=401, detail="Invalid Token")


@router.put("/post/{post_id}", response_model=postOut, tags=["Posts"])
def update_post(
    post_id: int,
        post: postIn,
        repo: PostRepository = Depends(),
        account_data:
        dict = Depends(authenticator.get_current_account_data),):
    if account_data:
        return repo.update(post_id, post)
    else:
        raise HTTPException(status_code=401, detail="Invalid Token")


@router.get("/post/game/{games_id}",
            response_model=Union[List[postOut], Error], tags=["Posts"])
def get_posts_by_game_id(
    games_id: int,
        repo: PostRepository = Depends(),
        account_data:
        dict = Depends(authenticator.get_current_account_data),):
    if account_data:
        return repo.get_by_game_id(games_id)
    else:
        raise HTTPException(status_code=401, detail="Invalid Token")
