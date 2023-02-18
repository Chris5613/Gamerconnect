from fastapi import APIRouter, Depends
from typing import List
from queries.posts import postIn, PostRepository, postOut

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
