---
title: Getting Started
description: Learn the basics to get your local instance up and running
---

Learn how to install all the components to run a local instance in your machine.

## Node
Use Node 20. You can install it with nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Now run the following command to check if its installed correctly:
```bash
nvm -v # >= 0.39.3
```

To install a node version and make it default run:
```bash
nvm install 20 && nvm use 20
```

## pnpm
This is an alternative for `npm` that installs packages faster. To install it, you just simply run:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Or you can install it with npm as a global package:

```bash
npm install -g pnpm
```

or

```bash
npm install -g @pnpm/exe
```

## Docker
Personally, I prefer Docker Desktop, so is as simple as going to the [Docker Desktop page](https://www.docker.com/products/docker-desktop/) and follow the instructions to install it.

> Note:   
> Make sure Docker is running before starting the project.

## Run the project

### Install packages
```bash
pnpm install
```

### Configure ENV variables
Configure the environment variables, rename `.env.template` to `.env`.   

### Create Database
Create Postgres Database container with Docker:
```bash
docker-compose up -d
```

### Generate Prisma Client
Generate Prisma client to add typing to database models:
```bash
pnpm dlx prisma generate
```

### Populate the database
Run the database seed with:
```bash
pnpm seed
```

### Run
Run the project with:
```bash
pnpm dev
```
