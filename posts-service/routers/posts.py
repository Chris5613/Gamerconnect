from fastapi import APIRouter, Depends
from queries.posts import postIn, PostRepository

router = APIRouter()


@router.post("/post")
def create_post(
    post: postIn,
    repo: PostRepository = Depends()):
    return repo.create(post)


