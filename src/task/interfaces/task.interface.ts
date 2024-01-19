import { TaskPriority, TaskStatus } from ".";

export interface Task {
  id: string;
  slug: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
  startDate?: Date;
  stopDate?: Date;
  createdAt: Date;
  updatedAt?: Date;

  parent?: Task;
};