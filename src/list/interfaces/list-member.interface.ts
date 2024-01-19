import { User } from "@/user/interfaces";
import { List } from ".";

export interface ListMember {
  id: string;
  list: List;
  user: User;
};