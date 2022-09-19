import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import uploadRoute from "./Routes/RestoreImageRoute.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.listen(process.env.PORT, () =>
  console.log(`Listening at ${process.env.PORT}`)
);

app.use("/api/v1/restore", uploadRoute);
