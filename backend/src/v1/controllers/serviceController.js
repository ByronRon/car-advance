import serviceDatabase from "../../database/service.js";
import AppError from "../../utils/appError.js";

export const getServices = (req, res, next) => {
  serviceDatabase.getServices((err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const getService = (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  serviceDatabase.getService(id, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const createService = (req, res, next) => {
  const { body } = req;
  if (!body.title) {
    return next(new AppError("Fields required"));
  }
  serviceDatabase.createService(body, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const updateService = (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  if (!id) {
    return next(new AppError("The required field id is missing"));
  }
  serviceDatabase.updateService(id, body, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};

export const deleteService = (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  serviceDatabase.deleteService(id, (err, data) => {
    if (err) {
      return next(new AppError("ERROR"));
    }
    res.status(200).send({ status: "OK", data: data });
  });
};
