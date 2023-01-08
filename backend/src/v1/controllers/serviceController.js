import AppError from "../../utils/appError.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getServices = async (req, res, next) => {
  try {
    const services = await prisma.service.findMany();
    res.status(200).send({ status: "OK", data: services });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al obtener los registros"));
  }
};

export const getService = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  try {
    const service = await prisma.service.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    res.status(200).send({ status: "OK", data: service });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al obtener el registro"));
  }
};

export const createService = async (req, res, next) => {
  const { body } = req;
  if (!body.title) {
    return next(new AppError("Fields required"));
  }

  try {
    const service = await prisma.service.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });
    res.status(200).send({ status: "OK", data: service });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al crear el registro"));
  }
};

export const updateService = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  try {
    const serviceUpdated = await prisma.service.update({
      where: {
        id: id,
      },
      data: {
        title: body.title,
        description: body.description,
      },
    });
    res.status(200).send({ status: "OK", data: serviceUpdated });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al actualizar el registro"));
  }
};

export const deleteService = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  try {
    const serviceDeleted = await prisma.service.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send({ status: "OK", data: serviceDeleted });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al eliminar el registro"));
  }
};
