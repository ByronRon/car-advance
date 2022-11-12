import { json } from "express";
import { v4 as uuid } from "uuid";
import carDatabase from "../../database/car.js";

const getAllCars = (result) => {
  const allCars = carDatabase.getAllCars((result) => result);
  console.log(allCars);
  return allCars;
};

const getOneCar = (carId) => {
  const car = carDatabase.getOneCar(carId);
  return car;
};

const createNewCar = (newCar) => {
  const carToInsert = {
    ...newCar,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdCar = carDatabase.createNewCar(carToInsert);
  return createdCar;
};

const updateOneCar = (carId, changes) => {
  const updatedCar = carDatabase.updateOneCar(carId, changes);
  return updatedCar;
};

const deleteOneCar = (carId) => {
  carDatabase.deleteOneCar(carId);
};

export default {
  getAllCars,
  getOneCar,
  createNewCar,
  updateOneCar,
  deleteOneCar,
};
