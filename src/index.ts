import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Request, Response } from "express";
import { Routes } from "./routes";
import config from "./configuration/config";
import auth from "./middlaware/auth";
import connection from "./configuration/connection";

const allowedOrigins = [
  "capacitor://localhost",
  "ionic://localhost",
  "http://localhost",
  "https://localhost",
  "http://localhost:8080",
  "http://localhost:8100",
  "http://localhost:4200",
  "http://192.168.100.11:8100",
  "https://lacarte-web.onrender.com",
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
};

// create express app
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));

// Enable preflight requests for all routes
app.options("*", cors(corsOptions));

// Cors
app.use(cors(corsOptions));

// Middlaware
app.use(auth);

// register express routes from defined application routes
Routes.forEach((route) => {
  (app as any)[route.method](route.route, cors(corsOptions), (req: Request, res: Response, next: Function) => {
    const result = new (route.controller as any)()[route.action](req, res, next);
    if (result instanceof Promise) {
      // result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
      // this code has been changed to insert status and messages
      result.then((d) => {
        if (d && d.status) res.status(d.status).send(d.message || d.errors);
        else if (d && d.file) res.sendFile(d.file);
        else res.json(d);
      });
    } else if (result !== null && result !== undefined) {
      res.json(result);
    }
  });
});

// start express server
app.listen(config.port, async () => {
  console.log(`Api initialized in port ${config.port}`);
  try {
    await connection
      .createConnection()
      .then(() => {
        console.log("Database conected! 🏆");
      })
      .catch((err) => {
        console.error("Erro durante o processo de inicialização", err);
      });

    //   await connection.createConnection();
    //   console.log("Database connected!");
    //   // insert new users for initialize
  } catch (error) {
    console.log("Database not conected. Error =", error);
  }
});
