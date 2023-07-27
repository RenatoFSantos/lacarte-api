import "dotenv/config";
import "reflect-metadata";
import { createConnection } from "typeorm";
const cfg = require("../../ormconfig.json");

export const AppDataSource = async () =>
  await createConnection({
    type: cfg.type,
    url: cfg.dburi,
    entities: [`${__dirname}/**/entities/*.{ts.js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts.js}`],
  });
