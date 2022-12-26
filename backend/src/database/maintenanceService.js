import { pool } from "../db.js";

// Get all services by maintenance
const getMaintenanceServices = (maintenanceId, result) => {
  const sql =
    "select m.id, m.maintenance_id, m.service_id, s.title, s.description from car_advance.maintenance_service m, car_advance.service s where maintenance_id = ? and service_id = s.id";
  pool.query(sql, maintenanceId, (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

// Get a specific service by maintenance
const getMaintenanceService = (id, result) => {
  const sql =
    "select m.id, m.maintenance_id, m.service_id, s.title, s.description from car_advance.maintenance_service m, car_advance.service s where m.id = ? and service_id = s.id";
  pool.query(sql, id, (err, data) => {
    if (err) {
      console.log("error", err);
      return result(err, null);
    }
    console.log(data);
    return result(null, data);
  });
};

const createMaintenanceService = (newService, result) => {
  const sql =
    "INSERT INTO maintenance (`maintenance_id`,`service_id`,`price`,`notes`) VALUES (?)";

  const values = [
    newService.maintenance_id,
    newService.service_id,
    newService.price || null,
    newService.notes,
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

const updateMaintenanceService = (id, changes, result) => {
  const sql =
    "UPDATE maintenance_service SET `service_id`=?,`price`=?,`notes`=? where id = ?";

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

const deleteMaintenanceService = (id, result) => {
  const sql = "DELETE FROM maintenance_service where `id` = ?";
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
  getMaintenanceServices,
  getMaintenanceService,
  createMaintenanceService,
  updateMaintenanceService,
  deleteMaintenanceService,
};
