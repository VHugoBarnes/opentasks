import { SpaceColor, SpaceIcon } from ".";

export interface Space {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon: SpaceIcon;
  color: SpaceColor;
  createdAt: Date;
  updatedAt: Date;
};