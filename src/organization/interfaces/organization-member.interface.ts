import { User } from "@/user/interfaces";
import { Organization } from ".";

export enum OrganizationMemberRole {
  admin = "admin",
  user = "user",
  guest = "guest"
};

export interface OrganizationMember {
  id: string;
  organization: Organization;
  user: User;
  role: OrganizationMemberRole;
};