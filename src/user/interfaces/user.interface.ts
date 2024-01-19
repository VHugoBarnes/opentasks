export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  password: string;
  profilePhoto?: string;
  createdAt: Date;
  updatedAt?: Date;
};