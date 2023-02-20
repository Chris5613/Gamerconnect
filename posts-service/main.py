from fastapi import FastAPI
from routers import posts, user, games

app = FastAPI()
app.include_router(posts.router)
app.include_router(user.router)
app.include_router(games.router)
