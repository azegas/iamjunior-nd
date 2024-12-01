export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isCorrectPassword(password: string): Promise<boolean>;
};
