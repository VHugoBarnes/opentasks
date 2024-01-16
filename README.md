# OpenTasks
OpenTasks is an OpenSource project that lets you and your team manage tasks in a easy way.

## Getting Started
1. Install packages with:
```bash
pnpm install
```

2. Configure the environment variables, rename `.env.template` to `.env`.   

3. Create Postgres Database container with Docker:
```bash
docker-compose up -d
```

4. Generate Prisma client to add typing to database models:
```bash
pnpm dlx prisma generate
```

5. Run the database seed with:
```bash
pnpm seed
```

6. Run the project with:
```bash
pnpm dev
```
