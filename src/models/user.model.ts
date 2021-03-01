import { Model, model, Schema } from "mongoose";
import { IUser } from "../interfaces/user";

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    middlename: { type: String },
  },
  {
    timestamps: true,
  }
);

export const UserModl: Model<IUser> = model("UserModl", UserSchema);
