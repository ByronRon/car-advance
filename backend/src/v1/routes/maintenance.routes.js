import { Router } from "express";
import {
  checkRequiredPermissions,
  validateAccessToken,
} from "../../utils/auth0.middleware.js";
import {
  getMaintenances,
  getMaintenance,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
} from "../controllers/maintenanceController.js";
import { UserMaintenancePermissions } from "../permissions/maintenance.permissions .js";

const router = Router();

router.get(
  "/cars/:carId/maintenances",
  validateAccessToken,
  checkRequiredPermissions([UserMaintenancePermissions.ReadList]),
  getMaintenances
);

router.get(
  "/maintenances/:id",
  validateAccessToken,
  checkRequiredPermissions([UserMaintenancePermissions.Read]),
  getMaintenance
);

router.post(
  "/maintenances",
  validateAccessToken,
  checkRequiredPermissions([UserMaintenancePermissions.Create]),
  createMaintenance
);

router.patch(
  "/maintenances/:id",
  validateAccessToken,
  checkRequiredPermissions([UserMaintenancePermissions.Update]),
  updateMaintenance
);

router.delete(
  "/maintenances/:id",
  validateAccessToken,
  checkRequiredPermissions([UserMaintenancePermissions.Delete]),
  deleteMaintenance
);

export default router;
