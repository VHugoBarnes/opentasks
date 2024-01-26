import z from "zod";
import bcryptjs from "bcryptjs";

import { createUser } from "@/user/services";
import { createOrganization } from "@/organization/services";
import { createSpace } from "@/space/services";
import { createList } from "@/list/services";
import { SignUpValidation } from "../dto";

interface SignupUser {
  name: string;
  username: string;
  email: string;
  password: string;
};

export const signup = async (signupUser: SignupUser) => {
  const parsedUser = z
    .object(SignUpValidation)
    .safeParse(signupUser);

  if (!parsedUser.success) {
    return {
      ok: false,
      message: "[parsing-error]",
      data: null
    };
  }

  const data = parsedUser.data;

  try {
    const { password, ...rest } = data;
    const user = await createUser({
      ...rest,
      password: bcryptjs.hashSync(password, 10)
    });

    if (!user) {
      return {
        ok: false,
        message: "[fail-creating-user]",
        data: null
      };
    }

    const orgResponse = await createOrganization({
      name: `${data.username} Organization`,
      userId: user?.id
    });

    if (!orgResponse) {
      return {
        ok: false,
        message: "[fail-creating-organization]",
        data: null
      };
    }

    const spaceResponse = await createSpace({
      name: "New Space",
      organizationId: orgResponse?.data.organization.id
    });

    if (!spaceResponse) {
      return {
        ok: false,
        message: "[fail-creating-space]",
        data: null
      };
    }

    await createList({
      name: "List",
      spaceId: spaceResponse.data.space.id
    });

    // TODO: send email to activate account
    return {
      ok: true,
      message: "[success]",
      data: {
        user: user
      }
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "[server-error]",
      data: null
    };
  }
};