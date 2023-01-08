import { Router } from "express";
import {
  getMaintenances,
  getMaintenance,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
} from "../controllers/maintenanceController.js";

import {
  getMaintenanceServices,
  getMaintenanceService,
  createMaintenanceService,
  updateMaintenanceService,
  deleteMaintenanceService,
} from "../controllers/maintenanceServiceController.js";

const router = Router();

router.get("/cars/:carId/maintenances", getMaintenances);

router.get("/maintenances/:id", getMaintenance);

router.post("/maintenances", createMaintenance);

router.patch("/maintenances/:id", updateMaintenance);

router.delete("/maintenances/:id", deleteMaintenance);

router.get("/maintenances/:id/services", getMaintenanceServices);

router.get("/maintenances/:id/services/:msid", getMaintenanceService);

router.post("/maintenances/:id/services", createMaintenanceService);

router.patch("/maintenances/:id/services/:msid", updateMaintenanceService);

router.delete("/maintenances/:id/services/:msid", deleteMaintenanceService);

export default router;
