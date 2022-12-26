import maintenanceDatabase from "../../database/maintenance.js";
import AppError from "../../utils/appError.js";

export const getMaintenances = (req, res, next) => {
  const {
    params: { car_id },
  } = req;

  if (!car_id) {
    return next(new AppError("The required field id is missing"));
  }

  maintenanceDatabase.getMaintenances(car_id, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const getMaintenance = (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  maintenanceDatabase.getMaintenance(id, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const createMaintenance = (req, res, next) => {
  const { body } = req;
  if (!body.car_id || !body.title || !body.date || !body.mileage) {
    return next(new AppError("Fields required"));
  }
  maintenanceDatabase.createMaintenance(body, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const updateMaintenance = (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  if (!id) {
    return next(new AppError("The required field id is missing"));
  }
  maintenanceDatabase.updateMaintenance(id, body, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const deleteMaintenance = (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  maintenanceDatabase.deleteMaintenance(id, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};
