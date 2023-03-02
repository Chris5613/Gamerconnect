from fastapi.testclient import TestClient
from main import app
from queries.posts import PostRepository
from auth import authenticator


client = TestClient(app)


class EmptyPostQueries:
    def get_all(self):
        return [mock_data]


mock_data = {
    "id": 1,
    "title": "string",
    "description": "string",
    "picture_url": "string",
    "username": "1",
    "game": "1"
}

mock_user = {
  "id": "1",
  "username": "dean",
  "hashed_password": "$2b$12$IW8oG69il",
  "email": "dean"
}


def account_override():
    return mock_user


def test_get_all_posts():
    app.dependency_overrides[PostRepository] = EmptyPostQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_override
    response = client.get('/posts')
    assert response.status_code == 200
    app.dependency_overrides = {}


def test_init():
    assert 1 == 1
