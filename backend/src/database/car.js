import { pool } from "../db.js";

const getCars = (result) => {
  pool.query("SELECT * from car", [], (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }

    console.log(data);
    return result(null, data);
  });
};

const getCar = (id, result) => {
  const sql = "SELECT * from car where id = ?";
  pool.query(sql, id, (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

const createCar = (newCar, result) => {
  const sql =
    "INSERT INTO car (`brand`,`model`,`year`,`plate`,`cc`,`color`,`image`,`purchase_date`,`purchase_price`,`sale_date`,`sale_price`) VALUES (?)";

  const values = [
    newCar.brand,
    newCar.model,
    newCar.year,
    newCar.plate,
    newCar.cc,
    newCar.color,
    newCar.image,
    newCar.purchase_date || null,
    newCar.purchase_price || null,
    newCar.sale_date || null,
    newCar.sale_price || null,
  ];
  pool.query(sql, [values], (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

const updateCar = (id, changes, result) => {
  const sql =
    "UPDATE car SET `brand`=?,`model`=?,`year`=?,`plate`=?,`cc`=?,`color`=?,`image`=?,`purchase_date`=?,`purchase_price`=?,`sale_date`=?,`sale_price`=? where id = ?";

  const values = [
    changes.brand,
    changes.model,
    changes.year,
    changes.plate,
    changes.cc,
    changes.color,
    changes.image,
    changes.purchase_date || null,
    changes.purchase_price || null,
    changes.sale_date || null,
    changes.sale_price || null,
  ];
  pool.query(sql, [...values, id], (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

const deleteCar = (id, result) => {
  const sql = "DELETE FROM car where `id` = ?";
  pool.query(sql, id, (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

export default {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
};
