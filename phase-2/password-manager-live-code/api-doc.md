# favorite-shows-app-server

List of available endpoints:
- `POST /auth/register`
- `POST /auth/login`

Manage logged in user data:
- `GET /passwords`
- `GET /passwords/:id`
- `POST /passwords`
- `DELETE /passwords/:id`

Error response format:

Status: `4xx` or `5xx`  

```json
{
  "errors": [
    "...",
    "..."
  ]
}
```

## POST /auth/register

- Request Header(s):
  - `Content-Type`: `application/x-www-form-urlencoded` or `application/json`
- Request Body:
  - `email`: `String (required, unique)`
  - `password`: `String (required, min length: 6)`
- Response:
  - `status`: `201`
  - `body`:
    ```json
    {
      "_id": "...",
      "email": "...",
      "password": "..."
    }
    ```

## POST /auth/login

- Request Header(s):
  - `Content-Type`: `application/x-www-form-urlencoded` or `application/json`
- Request Body:
  - `email`: `String (unique)`
  - `password`: `String`
- Response:
  - `status`: `200`
  - `body`:
    ```json
    {
      "_id": "...",
      "email": "...",
      "token": "...",
    }
    ```

## GET /passwords

- Request Header(s):
  - `Authorization`: `token <token>`  
    *replace `<token>` with your actual token from `POST /auth/login` response*
- Response:
  - `status`: `200`
  - `body`:
    ```json
    [
      {
        "_id": "...",
        "url": "...",
        "username": "...",
        "password": "...",
      }
    ]
    ```

## POST /passwords

- Request Header(s):
  - `Authorization`: `token <token>`  
    *replace `<token>` with your actual token from `POST /auth/login` response*
  - `Content-Type`: `application/x-www-form-urlencoded` or `application/json`
- Request Body:
  - `url`: `String (required)`
  - `username`: `String (required)`
  - `password`: `String (required)`
- Response:
  - `status`: `201`
  - `body`:
    ```json
    {
      "_id": "...",
      "url": "...",
      "username": "...",
      "password": "...",
    }
    ```

## DELETE /passwords/:id

- Request Header(s):
  - `Authorization`: `token <token>`  
    *replace `<token>` with your actual token from `POST /auth/login` response*
- Request Param(s):
  - `id`: `ObjectId String`
- Response:
  - `status`: `200`
  - `body`:
    ```json
    {
      "_id": "...",
      "url": "...",
      "username": "...",
      "password": "...",
    }
    ```
