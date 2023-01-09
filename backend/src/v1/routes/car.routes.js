import { Router } from "express";
import {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";

import {
  checkRequiredPermissions,
  validateAccessToken,
} from "../../utils/auth0.middleware.js";
import { UserCarPermissions } from "../permissions/car.permissions.js";

const router = Router();

router.get(
  "/cars",
  validateAccessToken,
  checkRequiredPermissions([UserCarPermissions.ReadList]),
  getCars
);

router.get(
  "/cars/:id",
  validateAccessToken,
  checkRequiredPermissions([UserCarPermissions.Read]),
  getCar
);

router.post(
  "/cars",
  validateAccessToken,
  checkRequiredPermissions([UserCarPermissions.Create]),
  createCar
);

router.patch(
  "/cars/:id",
  validateAccessToken,
  checkRequiredPermissions([UserCarPermissions.Update]),
  updateCar
);

router.delete(
  "/cars/:id",
  validateAccessToken,
  checkRequiredPermissions([UserCarPermissions.Delete]),
  deleteCar
);

export default router;
