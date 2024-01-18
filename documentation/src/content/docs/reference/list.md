---
title: List
description: The API endpoints used to interact with the List in OpenTasks
---

In this reference page you will learn how to interact with the List model.
To learn more about the model, visit the [List model definition page](/journey/database#list).

**Or see this List model schema from Prisma:**
```prisma
model List {
  id          String       @id @default(cuid())
  name        String
  slug        String
  description String
  icon        ListIcons
  color       ListColors
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  ListMember  ListMember[]
}

model ListMember {
  id String @id @default(cuid())

  space  List   @relation(fields: [listId], references: [id])
  listId String

  user   User   @relation(fields: [userId], references: [id])
  userId String
}
```
For more information visit the [Database page](/journey/database) to see more information about restrictions, enums and other models.

---

## Create a List
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

## Manage members in List
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

## Update List details
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

## Delete List
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
