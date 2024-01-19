import { User } from "@/user/interfaces";
import { Space } from ".";

export interface SpaceMember {
  id: string;
  space: Space;
  user: User;
};