import config from "config";
import mongoose from "mongoose";
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  Logger.info("Conectou com o banco de dados!");

  try {
    await mongoose.connect(dbUri);
  } catch (e) {
    Logger.error("Não foi possível conectar!");
    Logger.error(`Erro: ${e}`);
    process.exit(1);
  }
}

export default connect;
