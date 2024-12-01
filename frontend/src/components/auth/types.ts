export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

export type LoginResponse = {
  message: string;
  success: boolean;
  token: string;
  user: User;
};

export type LoginValues = {
  email: string;
  password: string;
};
