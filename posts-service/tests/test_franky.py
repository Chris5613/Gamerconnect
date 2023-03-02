from fastapi.testclient import TestClient
from main import app
from queries.posts import PostRepository
from auth import authenticator


client = TestClient(app)


class DeletePostQueries:
    def delete(self, id: int):
        result = {f"Post {id} deleted": True}
        return result


def test_delete_post():
    app.dependency_overrides[PostRepository] = DeletePostQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = DeletePostQueries
    response = client.delete("/post/1")
    assert response.status_code == 200


def test_init():
    assert 1 == 1
