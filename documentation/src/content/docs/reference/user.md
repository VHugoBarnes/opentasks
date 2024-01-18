---
title: User
description: The API endpoints used to interact with the users in OpenTasks
---

The user is one of the central points in OpenTasks, in this reference page you will learn how to interact with the User model.
To learn more about the User model, visit the [User model definition page](/journey/database#user).

**Or see this User model schema from Prisma:**
```prisma
model User {
  id           String   @id @default(cuid())
  username     String
  email        String   @unique
  name         String
  password     String
  profilePhoto String?
  timezone     String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  OrganizationMember OrganizationMember[]
  SpaceMember        SpaceMember[]
  ListMember         ListMember[]
  Task               Task[]
  TaskAssignees      TaskAssignee[]
  TaskComments       TaskComment[]
  TaskAttachments    TaskAttachment[]
  TaskTrackings      TaskTracking[]
  TaskCommentLike    TaskCommentLike[]
}
```
For more information visit the [Database page](/journey/database) to see more information about restrictions, enums and other models.

---
## Create a User
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

## Get a single User
### Request
Replace `:username` with the username of the user you want to get:
```http
[GET] https://opentasks-vh.vercel.app/api/user/:username
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

## Search Users (pagination)
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

## Update User
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

## Update email
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

## Delete User
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