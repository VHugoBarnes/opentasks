import prisma from "@/lib/prisma";
import { Organization } from "@/organization/interfaces";
import { createSlug } from "@/shared/utils";

interface Payload {
  name: string;
  organizationId: string;
  userId: string;
};

export const createSpace = async (payload: Payload) => {
  try {
    const newSpace = await prisma.space.create({
      data: {
        name: payload.name,
        slug: createSlug(payload.name),
        organizationId: payload.organizationId
      }
    });

    await prisma.spaceMember.create({
      data: {
        spaceId: newSpace.id,
        userId: payload.userId,
      }
    });

    return {
      ok: true,
      message: "[success]",
      data: {
        space: newSpace
      }
    };
  } catch (error) {
    console.error(error);
  }
};