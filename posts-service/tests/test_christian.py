from fastapi.testclient import TestClient
from auth import authenticator
from main import app
from queries.posts import PostRepository


client = TestClient(app)


class CreatePostQueries:
    def create(self, post):
        result = {
            "id": 1,
            "title": "string",
            "description": "string",
            "picture_url": "string",
            "user_id": 1,
            "game_id": 1
        }
        result.update(post)
        return result


mock_data = {
    "title": "string",
    "description": "string",
    "picture_url": "string",
    "user_id": 0,
    "game_id": 0
}


def account_override():
    return mock_data


def test_create_post():
    app.dependency_overrides[PostRepository] = CreatePostQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = account_override
    json = {
        "title": "string",
        "description": "string",
        "picture_url": "string",
        "user_id": 17,
        "game_id": 1
    }
    expected = {
        "id": 1,
        "title": "string",
        "description": "string",
        "picture_url": "string",
        "user_id": 17,
        "game_id": 1
    }
    response = client.post("/post", json=json)

    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == expected


def test_init():
    assert 1 == 1
