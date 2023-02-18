from fastapi import APIRouter, Depends
from typing import List, Union
from queries.posts import postIn, PostRepository, postOut, Error

router = APIRouter()
@router.post("/post")
def create_post(
    post: postIn,
    repo: PostRepository = Depends()):
    return repo.create(post)


@router.delete("/post/{post_id}")
def delete_post(
    post_id: int,
    repo: PostRepository = Depends()) -> postOut:
    return repo.delete(post_id)


@router.get("/post", response_model=List[postOut])
def get_all_post(
    repo: PostRepository = Depends()):
    return repo.get_all()

@router.get("/post/{post_id}", response_model=Union[postOut, Error])
def get_post(
    post_id: int,
    repo: PostRepository = Depends()):
    return repo.get_one(post_id)
