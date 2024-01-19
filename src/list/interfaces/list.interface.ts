import { ListColor, ListIcon } from ".";

export interface List {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon: ListIcon;
  color: ListColor;
  createdAt: Date;
  updatedAt?: Date;
}