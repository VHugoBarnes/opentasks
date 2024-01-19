import { User } from "@/user/interfaces";
import { Organization } from ".";

export interface OrganizationMember {
  id: string;
  organization: Organization;
  user: User;
};