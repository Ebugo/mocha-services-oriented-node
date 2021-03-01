import { error, info } from "console";
import mongoose from "mongoose";

type DBInput = {
  db: string;
};

export default ({ db }: DBInput) => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return info(`MongoDB connected`);
      })
      .catch((err) => {
        error(`Error connecting to database:`, err);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
