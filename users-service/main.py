from fastapi import FastAPI
from routers import user
import os


app = FastAPI()
app.include_router(user.router)
