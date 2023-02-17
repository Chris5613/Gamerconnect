from fastapi import APIRouter, Depends
from typing import List
from queries.posts import postIn, PostRepository, postOut

router = APIRouter()


@router.post("/post")
def create_post(
    post: postIn,
    repo: PostRepository = Depends()):
    return repo.create(post)

@router.get("/post", response_model=List[postOut])
def get_all(
    repo: PostRepository = Depends(),
    ):
    return repo.get_all()
