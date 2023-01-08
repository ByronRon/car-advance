import AppError from "../../utils/appError.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCars = async (req, res, next) => {
  try {
    const cars = await prisma.car
      .findMany
      //   {
      //   include: {
      //     maintenances: true,
      //   },
      // }
      ();
    res.status(200).send({ status: "OK", data: cars });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al obtener los registros"));
  }
};

export const getCar = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }
  try {
    const car = await prisma.car.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    res.status(200).send({ status: "OK", data: car });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al obtener el registro"));
  }
};

export const createCar = async (req, res, next) => {
  const { body } = req;
  if (!body.brand || !body.model || !body.year || !body.plate) {
    return next(new AppError("Fields required"));
  }

  try {
    const car = await prisma.car.create({
      data: {
        brand: body.brand,
        model: body.model,
        year: body.year,
        plate: body.plate,
        cc: body.cc,
        color: body.color,
        image: body.image,
        purchaseDate: body.purchaseDate ? new Date(body.purchaseDate) : null,
        purchasePrice: body.purchasePrice || null,
        saleDate: body.saleDate ? new Date(body.saleDate) : null,
        salePrice: body.salePrice || null,
        userId: body.userId,
      },
    });
    res.status(200).send({ status: "OK", data: car });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al crear el registro"));
  }
};

export const updateCar = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  if (!id) {
    return next(new AppError("The required field id is missing"));
  }
  try {
    const carUpdated = await prisma.car.update({
      where: {
        id: id,
      },
      data: {
        brand: body.brand,
        model: body.model,
        year: body.year,
        plate: body.plate,
        cc: body.cc,
        color: body.color,
        image: body.image,
        purchaseDate: body.purchaseDate ? new Date(body.purchaseDate) : null,
        purchasePrice: body.purchasePrice || null,
        saleDate: body.saleDate ? new Date(body.saleDate) : null,
        salePrice: body.salePrice || null,
      },
    });
    res.status(200).send({ status: "OK", data: carUpdated });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al actualizar el registro"));
  }
};

export const deleteCar = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  try {
    const carDeleted = await prisma.car.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send({ status: "OK", data: carDeleted });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al eliminar el registro"));
  }
};
