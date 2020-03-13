## Basic Rest API - Phase 2 Week 1 Day 1
# REST API built with Express and Sequelize.

List of basic routes:

| Route          | HTTP   | Header(s) | Body                                                     | Description                                          |
| -------------- | ------ | --------- | -------------------------------------------------------- | ---------------------------------------------------- |
| /api/register  | POST   | none      | username:String (required)<br>password:String (required) | Sign up with new user info                           |
| /api/login     | POST   | none      | username:String (required)<br>password:String (required) | Sign in and get an access token based on credentials |
| /api/todos     | GET    | none      | none                                                     | Get all user's todos                                 |
| /api/todos/:id | GET    | token     | none                                                     | Get a single todo (Owner only)                       |
| /api/todos     | POST   | token     | title:String (required)<br>description:String (required) | Create a todo (Authenticated users only)             |
| /api/todos/:id | DELETE | token     | none                                                     | Delete a todo (Owner only)                           |
| /api/todos/:id | PUT    | token     | title:String (optional)<br>description:String (optional) | Update a todo with new info (Owner only)             |
| /api/todos/:id | PATCH  | token     | title:String (optional)<br>description:String (optional) | Update a todo with new info (Owner only)             |