import {
  DeleteProtectedResource,
  GetProtectedResource,
  PostProtectedResource,
  UpdateProtectedResource,
} from "./resources.service";

export const getServices = async (accessToken) => {
  return await GetProtectedResource("services", accessToken);
};

export const getService = async (id, accessToken) => {
  return await GetProtectedResource("service/" + id, accessToken);
};

export const postServices = async (values, accessToken) => {
  return await PostProtectedResource("services", values, accessToken);
};

export const updateServices = async (id, values, accessToken) => {
  return await UpdateProtectedResource("services/" + id, values, accessToken);
};

export const deleteServices = async (id, accessToken) => {
  return await DeleteProtectedResource("services/" + id, accessToken);
};
