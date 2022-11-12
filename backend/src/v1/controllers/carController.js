import carDatabase from "../../database/car.js";
import AppError from "../../utils/appError.js";

export const getCars = (req, res, next) => {
  carDatabase.getCars((err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const getCar = (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  carDatabase.getCar(id, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const createCar = (req, res, next) => {
  const { body } = req;
  if (!body.brand || !body.model || !body.plate || !body.cc) {
    return next(new AppError("Fields required"));
  }
  carDatabase.createCar(body, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const updateCar = (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  if (!id) {
    return next(new AppError("The required field id is missing"));
  }
  carDatabase.updateCar(id, body, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const deleteCar = (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  carDatabase.deleteCar(id, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};
