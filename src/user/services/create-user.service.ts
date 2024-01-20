import prisma from "@/lib/prisma";

interface MinUser {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const createUser = async (user: MinUser) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
        username: user.username,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
      }
    });

    return newUser;
  } catch (error) {
    console.error(error);
  }
};