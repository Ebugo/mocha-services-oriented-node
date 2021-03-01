import { Handler } from "../types/routes";

export const Home: Handler = (req, res) => {
  res.send("TypeScript server UP!");
};
