import { iuser, tuser, updateuser } from "../services/users.service";
// import { Request, Response } from "express";
import { Handler } from "../types/routes";

export const CreateUser: Handler = async (req, res) => {
  // const { username, email, middlename }: IUser = req.body;
  const save = await iuser(req.body);
  if (!save) {
    return res.status(400).send(`No user created`);
  }
  return res.status(200).send({ success: true, body: save });
};

export const FindUser: Handler = async (req, res) => {
  // const { username }: TUser = req.body;
  try {
    const ByUsername = await tuser(req.body);
    return res.status(200).send({ success: true, body: ByUsername });
  } catch (error) {
    return res.status(402).send(error);
  }
};

export const UpdateExistingUser: Handler = async (req, res) => {
  // const { username, middlename, email } = req.body;
  try {
    const findUser = await tuser(req.body.username);
    if (!findUser) {
      return res.status(400).send(`No user found`);
    }
    const updatefounduser = await updateuser(req.body);
    return res.status(200).send({ success: true, body: updatefounduser });
  } catch (error) {
    return res.status(402).send(error);
  }
};
