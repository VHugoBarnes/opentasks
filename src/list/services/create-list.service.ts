import prisma from "@/lib/prisma";
import { createSlug } from "@/shared/utils";
import { Space } from "@/space/interfaces";

interface Payload {
  name: string;
  spaceId: string;
};

export const createList = async (payload: Payload) => {
  try {
    const newList = await prisma.list.create({
      data: {
        name: payload.name,
        slug: createSlug(payload.name),
        spaceId: payload.spaceId
      }
    });

    return {
      ok: true,
      message: "[success]",
      data: {
        list: newList
      }
    };
  } catch (error) {
    console.error(error);
  }
};