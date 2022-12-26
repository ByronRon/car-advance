import express from "express";
import AppError from "./utils/appError.js";
import errorHandler from "./utils/errorHandler.js";
import v1CarRouter from "./v1/routes/car.routes.js";
import v1ServiceRouter from "./v1/routes/service.routes.js";
import v1MaintenanceRouter from "./v1/routes/maintenance.routes.js";
import cors from "cors";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/v1", v1CarRouter);
app.use("/api/v1", v1ServiceRouter);
app.use("/api/v1", v1MaintenanceRouter);

app.all("*", (req, res, next) => {
  next(new AppError("Not found", 404));
});

app.use(errorHandler);

export default app;
