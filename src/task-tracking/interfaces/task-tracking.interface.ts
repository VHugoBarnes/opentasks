import { Task } from "@/task/interfaces";
import { User } from "@/user/interfaces";

export interface TaskTracking {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  startDateTime: Date;
  stopDateTime?: Date;

  task: Task;
  user: User;
}