import AppError from "../../utils/appError.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMaintenances = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  if (!carId) {
    return next(new AppError("The required field id is missing"));
  }

  try {
    const maintenances = await prisma.maintenance.findMany({
      where: {
        carId: carId,
      },
      include: {
        maintenanceServices: {
          include: {
            service: true,
          },
        },
      },
    });
    res.status(200).send({ status: "OK", data: maintenances });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al obtener registros"));
  }
};

export const getMaintenance = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  try {
    const maintenance = await prisma.maintenance.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: {
        maintenanceServices: {
          include: {
            service: true,
          },
        },
      },
    });

    res.status(200).status({ status: "OK", data: maintenance });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al obtener el registro"));
  }
};

export const createMaintenance = async (req, res, next) => {
  const { body } = req;
  if (!body.carId || !body.title || !body.date || !body.mileage) {
    return next(new AppError("Fields required"));
  }
  try {
    const maintenanceServices = [];
    if (body.services && body.services.length > 0) {
      body.services.map((service) => {
        maintenanceServices.push({
          price: service.price,
          notes: service.notes,
          serviceId: service.serviceId,
        });
      });
    }

    const maintenance = await prisma.maintenance.create({
      data: {
        carId: body.carId,
        title: body.title,
        date: body.date ? new Date(body.date) : null,
        totalPrice: body.totalPrice || null,
        mileage: body.mileage,
        notes: body.notes,
        maintenanceServices: {
          createMany: {
            data: maintenanceServices,
          },
        },
      },
    });
    res.status(200).send({ status: "OK", data: maintenance });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al crear el registro"));
  }
};

export const updateMaintenance = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  if (!id || !body.carId || !body.title || !body.date || !body.mileage) {
    return next(new AppError("Fields required"));
  }

  try {
    const maintenanceServices = [];
    if (body.services && body.services.length > 0) {
      body.services.map((service) => {
        maintenanceServices.push({
          price: service.price,
          notes: service.notes,
          serviceId: service.serviceId,
        });
      });
    }

    // 1. Delete or disconect all asociated services
    const deleteServices = prisma.maintenanceService.deleteMany({
      where: {
        maintenanceId: id,
      },
    });

    // 2. Update maintenances
    const maintenance = prisma.maintenance.update({
      where: {
        id: id,
      },
      data: {
        //carId: body.carId,
        title: body.title,
        date: body.date ? new Date(body.date) : null,
        totalPrice: body.totalPrice || null,
        mileage: body.mileage,
        notes: body.notes,
        maintenanceServices: {
          createMany: {
            data: maintenanceServices,
          },
        },
      },
    });

    // 3. Execute Transaction
    await prisma.$transaction([deleteServices, maintenance]);
    res.status(200).send({ status: "OK", data: maintenance });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al actualizar el registro"));
  }
};

export const deleteMaintenance = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    return next(new AppError("The required field id is missing"));
  }

  try {
    const maintenance = await prisma.maintenance.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({ status: "OK", data: maintenance });
  } catch (err) {
    console.log(err);
    return next(new AppError("Error al eliminar el registro"));
  }
};
