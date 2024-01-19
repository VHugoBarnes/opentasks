import prisma from "@/lib/prisma";
import { createSlug } from "@/shared/utils";

interface Payload {
  name: string;
};

export const createOrganization = async (payload: Payload) => {
  try {
    const newOrg = await prisma.organization.create({
      data: {
        name: payload.name,
        slug: createSlug(payload.name),
      }
    });

    return {
      ok: true,
      message: "[success]",
      data: {
        organization: newOrg
      }
    };
  } catch (error) {
    console.error(error);
  }
};