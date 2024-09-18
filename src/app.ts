require("dotenv").config();

import config from "config";
import express from "express";
import Logger from "../config/logger";

const app = express();

//JSON middleware
app.use(express.json());

//DB
import db from "../config/db";

//Routes
import router from "./router";

// middlewares
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware);
app.use("/api/", router);

//app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();

  Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
