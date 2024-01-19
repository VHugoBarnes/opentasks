import { Task } from "@/task/interfaces";
import { User } from "@/user/interfaces";

export interface TaskAttachment {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  metadata?: object;
  content: string;

  task: Task;
  owner: User;
};