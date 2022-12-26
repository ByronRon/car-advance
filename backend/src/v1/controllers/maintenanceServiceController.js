import maintenanceServiceDatabase from "../../database/maintenanceService.js";
import AppError from "../../utils/appError.js";

export const getMaintenanceServices = (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  maintenanceServiceDatabase.getMaintenanceServices(id, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const getMaintenanceService = (req, res, next) => {
  const {
    params: { msid },
  } = req;

  if (!msid) {
    return next(new AppError("The required field id is missing"));
  }

  maintenanceServiceDatabase.getMaintenanceService(msid, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const createMaintenanceService = (req, res, next) => {
  const { body } = req;
  if (!body.maintenance_id || !body.service_id) {
    return next(new AppError("Fields required"));
  }
  maintenanceServiceDatabase.createMaintenanceService(body, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const updateMaintenanceService = (req, res, next) => {
  const {
    body,
    params: { msid },
  } = req;
  if (!msid) {
    return next(new AppError("The required field id is missing"));
  }
  maintenanceServiceDatabase.updateMaintenanceService(
    msid,
    body,
    (err, data) => {
      if (err) {
        return next(new AppError("ERROR"));
      }
      res.status(200).send({ status: "OK", data: data });
    }
  );
};

export const deleteMaintenanceService = (req, res, next) => {
  const {
    params: { msid },
  } = req;

  if (!msid) {
    return next(new AppError("The required field id is missing"));
  }

  maintenanceServiceDatabase.deleteMaintenanceService(msid, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};
