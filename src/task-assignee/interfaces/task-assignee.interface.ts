import { Task } from "@/task/interfaces";
import { User } from "@/user/interfaces";

export interface TaskAssignee {
  id: string;
  createdAt: Date;
  updatedAt?: Date;

  task: Task;
  user: User;
};