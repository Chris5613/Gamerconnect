from fastapi.testclient import TestClient
from main import app
from queries.posts import PostRepository


client = TestClient(app)

class CreatePostQueries:
    def create(self, post):
        result = { 
            "id":1 ,            
            "title": "string",
            "description": "string",
            "picture_url": "string",
            "user_id": 1,
            "game_id": 1              
        }
        result.update(post)
        return result
        

def test_create_post():

    app.dependency_overrides[PostRepository] = CreatePostQueries

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