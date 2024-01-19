import { User } from "@/user/interfaces";
import { TaskComment } from ".";

export interface TaskCommentLike {
  id: string;
  comment: TaskComment;
  user: User;
};