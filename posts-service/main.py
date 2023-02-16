from fastapi import FastAPI
from routers import posts, user

app = FastAPI()
app.include_router(posts.router)
app.include_router(user.router)
