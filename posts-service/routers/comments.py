from fastapi import APIRouter, Depends, HTTPException
from typing import List, Union
from queries.comments import (
    CommentsRepository,
    commentOut,
    commentIn,
    Error
    )
from auth import authenticator


router = APIRouter()


@router.post("/comment", tags=["Comments"])
def create_comment(
    comment: commentIn,
        repo: CommentsRepository = Depends(),
        account_data:
        dict = Depends(authenticator.get_current_account_data),):
    if account_data:
        return repo.create(comment)
    else:
        return HTTPException(status_code=401, detail="Invalid Token")


@router.get("/comment", response_model=List[commentOut], tags=["Comments"])
def get_all_comments(
    repo: CommentsRepository = Depends(),
    account_data:
        dict = Depends(authenticator.get_current_account_data),):
    if account_data:
        return repo.get_all()
    else:
        return HTTPException(status_code=401, detail="Invalid Token")
