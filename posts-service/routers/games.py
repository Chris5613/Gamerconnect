from fastapi import APIRouter, Depends
from queries.games import Error, GamesRepository, GamesOut, GamesIn
from typing import Union, List
router = APIRouter()


@router.post("/createGame", response_model=GamesOut, tags=["Games"])
def create_game(
    game: GamesIn,
        repo: GamesRepository = Depends(),) -> GamesOut:
    return repo.create(game)


@router.get("/games",
            response_model=List[GamesOut],
            tags=["Games"])
def get_all_games(
    repo: GamesRepository = Depends()
):
    return repo.get_games()
