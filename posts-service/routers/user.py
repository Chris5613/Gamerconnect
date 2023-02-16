from fastapi import APIRouter, Depends
from queries.user import UserIn, UserRepository

router = APIRouter()

@router.post("/signup")
def create_user(user: UserIn, repo: UserRepository = Depends()):
    return repo.create(user)
