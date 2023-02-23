from fastapi import FastAPI
from routers import posts, user, games
from auth import authenticator 

app = FastAPI()
app.include_router(posts.router)
app.include_router(user.router)
app.include_router(games.router)
app.include_router(authenticator.router)