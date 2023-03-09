# APIs

## Users

- Method: POST, GET, PUT, DELETE

Users can signup and login, in the backend we can manipulate this data as well, in which we get all users, deleting and updating users too. User must be signed up and logged in to access the application.

Path: /signup

Input:
```
{
  "username": "string",
  "password": "string",
  "email": "string"
}
```
Output:
```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJhY2NvdW50Ijp7ImlkIjoxLCJ1c2VybmFtZSI6InN0cmluZyIsImhhc2hlZF9wYXNzd29yZCI6IiQyYiQxMiRxRi9nUldQaEw3T240R1JXZGROQkIuZTkwNDJsSUtPNXRkTG5CU0h0bXZzbDBnZGlBT0xqVyIsImVtYWlsIjoic3RyaW5nIn19.HkZclFiR7Th_lZOCFxnhcfysL1Frog5GPEfQmfElLOI",
  "token_type": "Bearer",
  "account": {
    "id": 1,
    "username": "string",
    "hashed_password": "$2b$12$qF/gRWPhL7On4GRWddNBB.e9042lIKO5tdLnBSHtmvsl0gdiAOLjW",
    "email": "string"
  }
}
```

Path: /token

Input:
```
{
  "username": "string",
  "password": "string",
}
```
Output:
```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJhY2NvdW50Ijp7ImlkIjoxLCJ1c2VybmFtZSI6InN0cmluZyIsImhhc2hlZF9wYXNzd29yZCI6IiQyYiQxMiRxRi9nUldQaEw3T240R1JXZGROQkIuZTkwNDJsSUtPNXRkTG5CU0h0bXZzbDBnZGlBT0xqVyIsImVtYWlsIjoic3RyaW5nIn19.HkZclFiR7Th_lZOCFxnhcfysL1Frog5GPEfQmfElLOI",
  "token_type": "Bearer"
}
```

## Posts

- Method: POST, GET, PUT, DELETE

Users can create a post, and others can see it on our community post page.

Path: /post

- Endpoint to create a post

Input:
```
{
  "title": "string",
  "description": "string",
  "picture_url": "string",
  "user_id": 1,
  "game_id": 1
}
```
Output:
```
{
  "id": 2,
  "title": "string",
  "description": "string",
  "picture_url": "string",
  "user_id": "1",
  "game_id": "1"
}
```

Path: /posts

- Endpoint to get all posts

Output:
```
[
  {
    "id": 3,
    "title": "string",
    "description": "string",
    "picture_url": "string",
    "username": "string",
    "game": "string"
  },
  {
    "id": 2,
    "title": "string",
    "description": "string",
    "picture_url": "string",
    "username": "string",
    "game": "string"
  }
]
```

Path: /posts/{post_id}

- Delete: example param = 2

Output:
```
{
  "Post 2 deleted": true
}
```

Path: /posts/{post_id}

- Update: example param = 3

Input:
```
{
  "title": "strings",
  "description": "strings",
  "picture_url": "strings",
  "user_id": 1,
  "game_id": 1
}
```

Output:
```
{
  "id": 3,
  "title": "strings",
  "description": "strings",
  "picture_url": "strings",
  "user_id": "1",
  "game_id": "1"
}
```

Path: /posts/{post_id}

- Get: example param = 2

Output:
```
{
  "id": 2,
  "title": "string",
  "description": "string",
  "picture_url": "string",
  "username": "string",
  "game": "string"
}
```
