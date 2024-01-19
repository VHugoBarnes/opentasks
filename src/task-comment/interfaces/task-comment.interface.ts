import { Task } from "@/task/interfaces";
import { User } from "@/user/interfaces";

export interface TaskComment {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  content: String;

  parent: TaskComment;
  task: Task;
  owner: User;
};