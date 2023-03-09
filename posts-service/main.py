from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import posts, user, games
from auth import authenticator


origins = [os.environ.get("CORS_HOST"), "http://localhost:3000"]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(posts.router)
app.include_router(user.router)
app.include_router(games.router)
app.include_router(authenticator.router)
