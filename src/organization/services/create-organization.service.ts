import prisma from "@/lib/prisma";
import { createSlug } from "@/shared/utils";
import { OrganizationMemberRole } from "@/organization/interfaces";

interface Payload {
  name: string;
  userId: string;
};

export const createOrganization = async (payload: Payload) => {
  try {
    const newOrg = await prisma.organization.create({
      data: {
        name: payload.name,
        slug: createSlug(payload.name),
      }
    });

    const orgMember = await prisma.organizationMember.create({
      data: {
        organizationId: newOrg.id,
        userId: payload.userId,
        role: OrganizationMemberRole.admin
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