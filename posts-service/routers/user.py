from fastapi import APIRouter, Depends
from queries.user import UserIn, UserRepository

router = APIRouter()

@router.post("/signup")
def create_user(user: UserIn, repo: UserRepository = Depends()):
    return repo.create(user)

@router.delete("/login/{user_id}", response_model=bool)
def delete_user(
    user_id: int,
    repo: UserRepository = Depends(),) -> bool:
    return repo.delete(user_id)
