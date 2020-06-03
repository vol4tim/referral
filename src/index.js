import express from "express";
import cors from "cors";
import createServer from "./server";
import db from "./models/db";
import referralRouter from "./routes/referral";
import config from "./config";
import logger from "./services/logger";

const app = express();
const server = createServer(app);
app.use(cors());
app.use("/api/referral", referralRouter);

db.sequelize.sync().then(() => {
  server.listen(config.PORT, config.HOST, () => {
    logger.info("Web listening " + config.HOST + " on port " + config.PORT);
  });
});
