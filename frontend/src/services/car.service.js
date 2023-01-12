import {
  DeleteProtectedResource,
  GetProtectedResource,
  PostProtectedResource,
  UpdateProtectedResource,
} from "./resources.service";

export const getCars = async (accessToken) => {
  return await GetProtectedResource("cars", accessToken);
};

export const getCar = async (id, accessToken) => {
  return await GetProtectedResource("cars/" + id, accessToken);
};

export const postCar = async (values, accessToken) => {
  return await PostProtectedResource("cars", accessToken, values);
};

export const updateCar = async (id, values, accessToken) => {
  return await UpdateProtectedResource("cars/" + id, accessToken, values);
};

export const deleteCar = async (id, accessToken) => {
  return await DeleteProtectedResource("cars/" + id, accessToken);
};
