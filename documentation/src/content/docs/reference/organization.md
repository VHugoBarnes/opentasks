---
title: Organization
description: The API endpoints used to interact with the Organizations in OpenTasks
---

The Organization is one of the central points in OpenTasks, in this reference page you will learn how to interact with the model.
To learn more about the model, visit the [Organization model definition page](/journey/database#organization-model).

**Or see this Organization model schema from Prisma:**
```prisma
model Organization {
  id                 String               @id @default(cuid())
  name               String
  slug               String
  createdAt          DateTime             @default(now())
  updatedAt          DateTime             @updatedAt
  OrganizationMember OrganizationMember[]
}

model OrganizationMember {
  id String @id @default(cuid())

  organization   Organization @relation(fields: [organizationId], references: [id])
  organizationId String

  user   User   @relation(fields: [userId], references: [id])
  userId String
}
```
For more information visit the [Database page](/journey/database) to see more information about restrictions, enums and other models.

---

## Create a Organization
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

## Manage members in Organization
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

## Delete Organization
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
