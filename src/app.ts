import express, { Application } from "express";
import bodyParser from "body-parser";
import Connect from "./utils/db.connect";
import { routes } from "./routes";
import { Route } from "./types/routes";

const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//attach routes
routes.forEach((route) => {
  const { method, path, middleware, handler }: Route = route;
  app[method](path, ...middleware, handler);
});

const PORT = process.env.PORT || 3012;
const db = "mongodb://localhost:27017/tsmocha";

Connect({ db });

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
