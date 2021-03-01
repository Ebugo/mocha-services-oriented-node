import { UserModl } from "../models/user.model";
import { IUser, TUser, UpdateUser } from "../interfaces/user";
import { error } from "console";

export const iuser = async ({ username, email, middlename }: IUser) => {
  // return new Promise(async (resolve, reject) => {
  try {
    const newUser = await UserModl.create({ username, email, middlename });
    return newUser;
  } catch (err) {
    return err;
  }
  // });
};
export const tuser = async ({ username }: TUser): Promise<TUser | any> => {
  // return new Promise(async (resolve, reject) => {
  try {
    const userByUsername = await UserModl.findOne({ username });
    if (!userByUsername) {
      return { message: "No user Found" };
    }
    return userByUsername;
  } catch (err) {
    return err;
  }
  // });
};

export const updateuser = async ({
  username,
  email,
  middlename,
  _id,
}: UpdateUser) => {
  try {
    const userUpdate = await UserModl.findByIdAndUpdate(
      { _id },
      { username, email, middlename }
      // { new: true }
    );
    if (!userUpdate) {
      return error;
    }
    return userUpdate;
  } catch (err) {
    return err;
  }
};
