import { pool } from "../db.js";

const getMaintenances = (car_id, result) => {
  const sql = "SELECT * from maintenance where car_id = ?";
  pool.query(sql, car_id, (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }

    console.log(data);
    return result(null, data);
  });
};

const getMaintenance = (id, result) => {
  const sql = "SELECT * from maintenance where id = ?";
  pool.query(sql, id, (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

const createMaintenance = (newMaintenance, result) => {
  const sql =
    "INSERT INTO maintenance (`car_id`,`title`,`date`,`total_price`,`mileage`,`notes`) VALUES (?)";

  const values = [
    newMaintenance.car_id,
    newMaintenance.title,
    newMaintenance.date || null,
    newMaintenance.total_price || null,
    newMaintenance.mileage,
    newMaintenance.notes,
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

const updateMaintenance = (id, changes, result) => {
  const sql =
    "UPDATE maintenance SET `car_id`=?,`title`=?,`date`=?,`total_price`=?,`mileage`=?,`notes`=? where id = ?";

  const values = [
    changes.car_id,
    changes.title,
    changes.date || null,
    changes.total_price || null,
    changes.mileage,
    changes.notes,
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

const deleteMaintenance = (id, result) => {
  const sql = "DELETE FROM maintenance where `id` = ?";
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
  getMaintenances,
  getMaintenance,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
};
