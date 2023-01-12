import {
  DeleteProtectedResource,
  GetProtectedResource,
  PostProtectedResource,
  UpdateProtectedResource,
} from "./resources.service";

export const getMaintenances = async (carId, accessToken) => {
  return await GetProtectedResource(
    "/cars/" + carId + "/maintenances",
    accessToken
  );
};

export const getMaintenance = async (id, accessToken) => {
  return await GetProtectedResource("/maintenances/" + id, accessToken);
};

export const postMaintenance = async (values, accessToken) => {
  return await PostProtectedResource("maintenances", accessToken, values);
};

export const updateMaintenance = async (id, values, accessToken) => {
  return await UpdateProtectedResource(
    "maintenances/" + id,
    accessToken,
    values
  );
};

export const deleteMaintenance = async (id, accessToken) => {
  return await DeleteProtectedResource("maintenances/" + id, accessToken);
};
