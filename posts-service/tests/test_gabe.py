from fastapi.testclient import TestClient
from main import app
from queries.posts import PostRepository, postOutUsername
from auth import authenticator

client = TestClient(app)


class GetOnePostQueries:
    def get_one(self, id):
        return postOutUsername(
            id="1",
            title="title",
            description="description",
            picture_url="string",
            username="Gabe",
            game="Fortnite",
        )


class FakeAuthenticator:
    def get_current_account_data(self):
        return {
            "id": 1,
            "username": "Gabe",
            "hashed_password": "$2b$12$iAJWXlKcU7",
            "email": "string"
            }


def test_get_one_post():
    expected = {
        "id": 1,
        "title": "title",
        "description": "description",
        "picture_url": "string",
        "username": "Gabe",
        "game": "Fortnite",
    }

    app.dependency_overrides[PostRepository] = GetOnePostQueries
    app.dependency_overrides[authenticator.get_current_account_data] = (
        FakeAuthenticator
    )
    response = client.get("/getpost/1")
    assert response.status_code == 200
    assert response.json() == expected


def test_init():
    assert 1 == 1
