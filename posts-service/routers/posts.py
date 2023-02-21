from fastapi import APIRouter, Depends
from typing import List, Union
from queries.posts import postIn, PostRepository, postOut, Error

router = APIRouter()
@router.post("/post",tags=["Posts"])
def create_post(
    post: postIn,
    repo: PostRepository = Depends()):
    return repo.create(post)


@router.delete("/post/{post_id}",tags=["Posts"])
def delete_post(
    post_id: int,
    repo: PostRepository = Depends()) -> postOut:
    return repo.delete(post_id)


@router.get("/post", response_model=List[postOut],tags=["Posts"])
def get_all_post(
    repo: PostRepository = Depends()):
    return repo.get_all()

@router.get("/post/{post_id}", response_model=Union[postOut, Error],tags=["Posts"])
def get_post(
    post_id: int,
    repo: PostRepository = Depends()):
    return repo.get_one(post_id)


@router.get("/post/user/{users_id}", response_model=Union[List[postOut], Error], tags=["Posts"])
def get_post_by_user_id(
    users_id: int,
    repo: PostRepository = Depends()
):
    return repo.get_byuserid(users_id)

@router.put("/post/{post_id}", response_model=postOut, tags=["Posts"])
def update_post(
    post_id: int,
    post: postIn,
    repo: PostRepository = Depends(),
) -> postOut:
    return repo.update(post_id, post)
