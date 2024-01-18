---
title: Space
description: The API endpoints used to interact with the Space in OpenTasks
---

In this reference page you will learn how to interact with the Space model.
To learn more about the model, visit the [Space model definition page](/journey/database#space-model).

**Or see this Space model schema from Prisma:**
```prisma
model Space {
  id          String        @id @default(cuid())
  name        String
  slug        String
  description String?
  icon        SpaceIcons    @default(smiley)
  color       SpaceColors   @default(blue)
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  SpaceMember SpaceMember[]
}

model SpaceMember {
  id String @id @default(cuid())

  space   Space  @relation(fields: [spaceId], references: [id])
  spaceId String

  user   User   @relation(fields: [userId], references: [id])
  userId String
}
```
For more information visit the [Database page](/journey/database) to see more information about restrictions, enums and other models.

---

## Create a Space
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

## Manage members in Space
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

## Update Space details
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

## Delete Space
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
