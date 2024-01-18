---
title: Database used
description: Learn the database structure used to create OpenTasks
---

## PostgreSQL

### Enums
```prisma
enum SpaceIcons {
  star
  smiley
  code
  money
}

enum SpaceColors {
  red
  blue
  green
  indigo
  rose
  pink
  purple
  black
}

enum ListIcons {
  star
  smiley
  code
  money
}

enum ListColors {
  red
  blue
  green
  indigo
  rose
  pink
  purple
  black
}

enum TaskPriorities {
  none
  low
  normal
  high
  urgent
}

enum TaskStatus {
  open
  inProgress
  inReview
  done
}
```

### User
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

### Organization
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

### Space
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

### List
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

### Task
```prisma
model Task {
  id          String         @id @default(cuid())
  slug        String
  title       String
  description String?
  priority    TaskPriorities @default(none)
  startDate   DateTime?
  dueDate     DateTime?
  status      TaskStatus     @default(open)
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt

  parentId String?
  parent   Task?   @relation("TaskToParent", fields: [parentId], references: [id])
  children Task[]  @relation("TaskToParent")

  owner   User   @relation(fields: [ownerId], references: [id])
  ownerId String

  TaskAssignees   TaskAssignee[]
  TaskComments    TaskComment[]
  TaskAttachments TaskAttachment[]
  TaskTrackings   TaskTracking[]
}

model TaskAssignee {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  task   Task   @relation(fields: [taskId], references: [id])
  taskId String

  user   User   @relation(fields: [userId], references: [id])
  userId String
}
```

### Task Comment
```prisma
model TaskComment {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  content   String

  parentCommentId String?
  parentComment   TaskComment?  @relation("CommentToParent", fields: [parentCommentId], references: [id])
  children        TaskComment[] @relation("CommentToParent")

  task   Task   @relation(fields: [taskId], references: [id])
  taskId String

  owner   User   @relation(fields: [ownerId], references: [id])
  ownerId String

  TaskCommentLike TaskCommentLike[]
}

model TaskCommentLike {
  id String @id @default(cuid())

  taskComment   TaskComment @relation(fields: [taskCommentId], references: [id])
  taskCommentId String

  user   User   @relation(fields: [userId], references: [id])
  userId String
}
```

### Task Attachment
```prisma
model TaskAttachment {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  metadata  Json?
  content   String

  task   Task   @relation(fields: [taskId], references: [id])
  taskId String

  owner   User   @relation(fields: [ownerId], references: [id])
  ownerId String
}
```

### Task Tracking
```prisma
model TaskTracking {
  id            String    @id @default(cuid())
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  startDateTime DateTime  @default(now())
  stopDateTime  DateTime?

  task   Task   @relation(fields: [taskId], references: [id])
  taskId String

  user   User   @relation(fields: [userId], references: [id])
  userId String
}
```
