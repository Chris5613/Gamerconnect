from fastapi.testclient import TestClient
from main import app
from queries.posts import PostRepository

client = TestClient(app)

class EmptyPostQueries:
    def get_all(self):
        return []

def test_get_all_posts():
    app.dependency_overrides[PostRepository] = EmptyPostQueries

    response = client.get('/post')

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == []

def test_init():
    assert 1 == 1
