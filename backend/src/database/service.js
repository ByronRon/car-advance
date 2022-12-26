import { pool } from "../db.js";

const getServices = (result) => {
  pool.query("SELECT * from service order by 2", [], (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }

    console.log(data);
    return result(null, data);
  });
};

const getService = (id, result) => {
  const sql = "SELECT * from service where id = ?";
  pool.query(sql, id, (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

const createService = (newService, result) => {
  const sql = "INSERT INTO service (`title`,`description`) VALUES (?)";

  const values = [newService.title, newService.description || null];
  pool.query(sql, [values], (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

const updateService = (id, changes, result) => {
  const sql = "UPDATE service SET `title`=?,`description`=? where id = ?";

  const values = [changes.title, changes.description || null];
  pool.query(sql, [...values, id], (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

const deleteService = (id, result) => {
  const sql = "DELETE FROM service where `id` = ?";
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
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
};
