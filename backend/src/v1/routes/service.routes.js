import { Router } from "express";
import {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

import {
  checkRequiredPermissions,
  validateAccessToken,
} from "../../utils/auth0.middleware.js";
import { UserServicePermissions } from "../permissions/service.permissions.js";

const router = Router();

router.get(
  "/services",
  validateAccessToken,
  checkRequiredPermissions([UserServicePermissions.ReadList]),
  getServices
);

router.get(
  "/services/:id",
  validateAccessToken,
  checkRequiredPermissions([UserServicePermissions.Read]),
  getService
);

router.post(
  "/services",
  validateAccessToken,
  checkRequiredPermissions([UserServicePermissions.Create]),
  createService
);

router.patch(
  "/services/:id",
  validateAccessToken,
  checkRequiredPermissions([UserServicePermissions.Update]),
  updateService
);

router.delete(
  "/services/:id",
  validateAccessToken,
  checkRequiredPermissions([UserServicePermissions.Delete]),
  deleteService
);

export default router;
