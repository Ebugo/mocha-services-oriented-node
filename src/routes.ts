import { Route } from "./types/routes";
import {
  CreateUser,
  FindUser,
  UpdateExistingUser,
} from "./controllers/user.controller";
import { Home } from "./controllers/home.controller";
import { requestLogger } from "./middlewares/requestLogger";

export const routes: Route[] = [

  {
    method: "get",
    path: "/",
    middleware: [requestLogger],
    handler: Home,
  },

  {
    method: "post",
    path: "/create",
    middleware: [],
    handler: CreateUser,
  },
  {
    method: "get",
    path: "/search",
    middleware: [],
    handler: FindUser,
  },
  {
    method: "post",
    path: "/update",
    middleware: [],
    handler: UpdateExistingUser,
  },
];
