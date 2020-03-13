# fancy-to-do API Documentation

# User

## Register USER

Melakukan register customer

**URL** : `/users/register`

**Method** : `POST`

**Auth Required** : NO

**Success Status Code** : 201

## Login

Melakukan login

**URL** : `/users/`

**Method** : `POST`

**Auth Required** : NO

**Request Body**

```json
{
  "email": "harrypotter@hogwarts",
  "password": "password"
}
```

**Success Status Code** : 200

## USER PROFILE

Untuk logout

**URL** : `/users/`

**Method** : `GET`

**Auth Required** : YES

**Success Status Code** : 200

# PERSONAL TODO

## Get Todos

Mengambil semua todo

**URL** : `/todos`

**Method** : `GET`

**Auth Required** : YES

**Success Status Code** : 200

## Post Todo

Menambahkan todo kedalam database

**URL** : `/todos`

**Method** : `POST`

**Auth Required** : YES

**Success Status Code** : 201

## Edit Todo

Mengedit todo

**URL** : `/todos/:todoId`

**Method** : `PATCH`

**Auth Required** : YES (Owner Only)

## Update Todo Status

Mengedit todo status

**URL** : `/todos/:todoId/updatestatus`

**Method** : `PATCH`

**Auth Required** : YES (Owner Only)

## DELETE Todo

Menghapus produk kedalam database

**URL** : `/todos/:productId`

**Method** : `DELETE`

**Auth Required** : YES (Owner Only)

**Success Status Code** : 200

## Find One Todo

Mencari todo secara spesifik by id

**URL** : `/:todoId/findone`

**Method** : `GET`

**Auth Required** : NO

**Success Status Code** : 200

# PROJECT

## Get User Project

Mengambil semua project

**URL** : `/projects`

**Method** : `GET`

**Auth Required** : YES

**Success Status Code** : 200

## Post Project

Menambahkan project baru

**URL** : `/projects`

**Method** : `POST`

**Auth Required** : YES

**Success Status Code** : 201

## Error

**CODE RESPONSE**

403 => diakibatkan oleh email/password salah, token tidak valid yang membuat
aplikasi logout.

401 => request tidak memiliki authorisasi

400 => Bad Request, kesalahan dari client

500 => Error berasal dari internal server
