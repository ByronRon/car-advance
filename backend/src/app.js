import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import nocache from "nocache";
import AppError from "./utils/appError.js";
import errorHandler from "./utils/error.middleware.js";
import v1CarRouter from "./v1/routes/car.routes.js";
import v1ServiceRouter from "./v1/routes/service.routes.js";
import v1MaintenanceRouter from "./v1/routes/maintenance.routes.js";
import notFoundHandler from "./utils/notFound.middleware.js";

dotenv.config();

if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
  throw new Error(
    "Missing required environment variables. Check docs for more info."
  );
}

const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;

const app = express();

// Middlewares
app.use(express.json());

//helmet
helmet({
  hsts: {
    maxAge: 31536000,
  },
  contentSecurityPolicy: {
    useDefaults: false,
    directives: {
      "default-src": ["'none'"],
      "frame-ancestors": ["'none'"],
    },
  },
  frameguard: {
    action: "deny",
  },
});

app.use(nocache());

//cors
app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);

//Routes
app.use("/api/v1", v1CarRouter);
app.use("/api/v1", v1ServiceRouter);
app.use("/api/v1", v1MaintenanceRouter);

app.all("*", (req, res, next) => {
  next(new AppError("Not found", 404));
});

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
