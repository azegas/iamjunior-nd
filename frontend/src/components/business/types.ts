export type Business = {
  _id: string;
  name: string;
  description: string;
  address: string;
  worker: string;
  contactPerson: string;
  email: string;
  category: { name: string };
  images: string[];
};