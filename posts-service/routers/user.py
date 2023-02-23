from fastapi import APIRouter, Depends
from typing import List, Union
from queries.user import UserIn, UserRepository, UserOut

router = APIRouter()

@router.post("/signup", tags=["Users"])
def create_user(user: UserIn, repo: UserRepository = Depends()):
    return repo.create(user)


@router.put("/update/{user_id}",tags=["Users"])
def update_user(
    user_id: int,
    user: UserIn,
    repo: UserRepository = Depends(),) -> UserOut:
    return repo.update(user_id,user)

@router.delete("/delete/{user_id}",tags=["Users"])
def delete_user(
    user_id: int,
    repo: UserRepository = Depends(),):
    return repo.delete(user_id)

@router.get("/users/all",tags=["Users"])
def get_all_users(
    repo: UserRepository = Depends(),):
    return repo.get_all()