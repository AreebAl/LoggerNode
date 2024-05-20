import express from "express"
import helmet  from "helmet";
import winston from "winston";
const app=express();
app.use(express.json())
app.use(helmet())

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });



  logger.info("this is info message");
  logger.error("this is error message")
  logger.warn("this is warning message")