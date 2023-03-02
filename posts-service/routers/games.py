from fastapi import APIRouter, Depends
from queries.games import Error, GamesRepository, GamesOut
from typing import Union, List
router = APIRouter()


@router.get("/games",
            response_model=Union[List[GamesOut], Error],
            tags=["Games"])
def get_all_games(
    repo: GamesRepository = Depends()
):
    return repo.get_games()
