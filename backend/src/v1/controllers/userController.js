import AppError from "../../utils/appError.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).send({ status: "OK", data: users });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al obtener los registros"));
  }
};

export const getUser = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    res.status(200).send({ status: "OK", data: user });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al obtener el registro"));
  }
};

export const createUser = async (req, res, next) => {
  const { body } = req;
  if (!body.providerId || !body.email) {
    return next(new AppError("Fields required"));
  }

  try {
    const user = await prisma.user.create({
      data: {
        providerId: body.providerId,
        firstName: body.firstName || "",
        lastName: body.lastName || "",
        email: body.email,
        isAdmin: false,
      },
    });
    res.status(200).send({ status: "OK", data: user });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al crear el registro"));
  }
};

export const updateUser = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  if (!id) {
    return next(new AppError("The required field id is missing"));
  }
  try {
    const userUpdated = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
      },
    });
    res.status(200).send({ status: "OK", data: userUpdated });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al actualizar el registro"));
  }
};

export const deleteUser = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  try {
    const userDeleted = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send({ status: "OK", data: userDeleted });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al eliminar el registro"));
  }
};
