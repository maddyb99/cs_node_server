import cors from 'cors';
import express from 'express';
import * as dotenv from "dotenv";
// import mongoose from 'mongoose';
import helmet from "helmet";
// import { apiInternal as apiV1 } from "./v1/main";
// import promBundle from "express-prom-bundle";
const swStats = require("swagger-stats");
// const apiSpec = require("swagger.json");

dotenv.config();
// const metricsMiddleware = promBundle({ includeMethod: true });

if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
 }

 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use(metricsMiddleware);
app.use(swStats.getMiddleware({  }));

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to NodeJs App using TypeScript'));