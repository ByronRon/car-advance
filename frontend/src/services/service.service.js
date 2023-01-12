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

export const postService = async (values, accessToken) => {
  return await PostProtectedResource("services", accessToken, values);
};

export const updateService = async (id, values, accessToken) => {
  return await UpdateProtectedResource("services/" + id, accessToken, values);
};

export const deleteService = async (id, accessToken) => {
  return await DeleteProtectedResource("services/" + id, accessToken);
};
