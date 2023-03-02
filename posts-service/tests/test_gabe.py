from fastapi.testclient import TestClient
from main import app
from queries.posts import PostRepository, postOutUsername

client = TestClient(app)

class GetOnePostQueries:
    def get_one(self, id: 1):
        return {}

def test_get_one_post():
    expected = {
  "id": 0,
  "title": "string",
  "description": "string",
  "picture_url": "string",
  "username": "string",
  "game": "string"
}
    app.dependency_overrides[PostRepository] = GetOnePostQueries

    response = client.get("/post/1")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == expected

def test_init():
    assert 1 == 1
