from fastapi.testclient import TestClient
from main import app
from queries.posts import PostRepository

client = TestClient(app)

class DeletePostQueries:
    def delete(self, id: 1):
        result = {f"Post {id} deleted": True}
        return result

def test_delete_post():

    expected = {f"Post 1 deleted": True}

    app.dependency_overrides[PostRepository] = DeletePostQueries

    response = client.delete("/post/1")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == expected


def test_init():
    assert 1 == 1
