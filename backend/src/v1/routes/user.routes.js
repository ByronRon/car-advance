import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import {
  checkRequiredPermissions,
  validateAccessToken,
} from "../../utils/auth0.middleware.js";
import { UserPermissions } from "../permissions/user.permissions.js";

const router = Router();

router.get(
  "/users",
  validateAccessToken,
  checkRequiredPermissions([UserPermissions.Admin]),
  getUsers
);

router.get(
  "/users/:id",
  validateAccessToken,
  checkRequiredPermissions([UserPermissions.Read]),
  getUser
);

router.post(
  "/users",
  validateAccessToken,
  checkRequiredPermissions([UserPermissions.Create]),
  createUser
);

router.patch(
  "/users/:id",
  validateAccessToken,
  checkRequiredPermissions([UserPermissions.Update]),
  updateUser
);

router.delete(
  "/users/:id",
  validateAccessToken,
  checkRequiredPermissions([UserPermissions.Admin]),
  deleteUser
);

export default router;
