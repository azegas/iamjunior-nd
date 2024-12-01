export type Business = {
  _id: string;
  name: string;
  description: string;
  address: string;
  worker: string;
  contactPerson: string;
  email: string;
  category: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export type BookingBusinessIdString = {
  _id: string;
  businessId: string;
  date: string;
  time: string;
  userEmail: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type BookingBusinessIdObject = {
  _id: string;
  businessId: Business;
  date: string;
  time: string;
  userEmail: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type BookingResponse = {
  message: string;
  booking: BookingBusinessIdString;
};
