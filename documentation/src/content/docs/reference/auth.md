---
title: Auth
description: The API endpoints used to interact with the users in OpenTasks
---

In this reference page you will learn how to interact with the Auth feature.
For more information visit the [Database page](/journey/database) to see more information about restrictions, enums and other models.

---
## Signup
### Request
```http
[POST] https://opentasks-vh.vercel.app/api/user
```

With the following JSON body:
```json title="HTTP Body"
{
  "email": "john.doe@gmail.com",
  "name": "John Doe",
  "password": "12345678"
}
```

### Success response
```json
{
  "ok": true,
  "message": "[success]",
  "data": {
    "token": "..."
  }
}
```

### Error response
Here an error with the server occurred:   
```json
{
  "ok": false,
  "message": "[server-error]",
  "data": null
}
```

The email being sent already exists in the database:
```json
{
  "ok": false,
  "message": "[user-already-exists]",
  "data": null
}
```

---

## Signin
### Request
```http
[POST] https://opentasks-vh.vercel.app/api/user
```

With the following JSON body:
```json title="HTTP Body"
{
  "email": "john.doe@gmail.com",
  "name": "John Doe",
  "password": "12345678"
}
```

### Success response
```json
{
  "ok": true,
  "message": "[success]",
  "data": {
    "token": "..."
  }
}
```

### Error response
Here an error with the server occurred:   
```json
{
  "ok": false,
  "message": "[server-error]",
  "data": null
}
```

The email being sent already exists in the database:
```json
{
  "ok": false,
  "message": "[user-already-exists]",
  "data": null
}
```

---

## Change password
### Request
```http
[POST] https://opentasks-vh.vercel.app/api/user
```

With the following JSON body:
```json title="HTTP Body"
{
  "email": "john.doe@gmail.com",
  "name": "John Doe",
  "password": "12345678"
}
```

### Success response
```json
{
  "ok": true,
  "message": "[success]",
  "data": {
    "token": "..."
  }
}
```

### Error response
Here an error with the server occurred:   
```json
{
  "ok": false,
  "message": "[server-error]",
  "data": null
}
```

The email being sent already exists in the database:
```json
{
  "ok": false,
  "message": "[user-already-exists]",
  "data": null
}
```

---

## Confirm password change
### Request
```http
[POST] https://opentasks-vh.vercel.app/api/user
```

With the following JSON body:
```json title="HTTP Body"
{
  "email": "john.doe@gmail.com",
  "name": "John Doe",
  "password": "12345678"
}
```

### Success response
```json
{
  "ok": true,
  "message": "[success]",
  "data": {
    "token": "..."
  }
}
```

### Error response
Here an error with the server occurred:   
```json
{
  "ok": false,
  "message": "[server-error]",
  "data": null
}
```

The email being sent already exists in the database:
```json
{
  "ok": false,
  "message": "[user-already-exists]",
  "data": null
}
```

---

