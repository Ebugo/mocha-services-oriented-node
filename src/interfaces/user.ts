import { Document } from "mongoose";

export interface IUser extends Document {
  username?: string;
  email: string;
  middlename: string;
}

export interface TUser extends Document {
  username?: string;
  _id?: string;
}

export interface UpdateUser extends Document {
  username?: string;
  email?: string;
  middlename?: string;
  _id?: string;
}
