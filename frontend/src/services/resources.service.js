import { callApi } from "./api.service";

const apiServerUrl = process.env.REACT_APP_API_URL;

const getPublicConfig = (url, method) => {
  return {
    url: apiServerUrl + url,
    method: method,
    headers: {
      "content-type": "application/json",
    },
  };
};

const getProtectedConfig = (url, method, accessToken, values) => {
  return {
    url: apiServerUrl + url,
    method: method,
    data: JSON.stringify(values) || {},
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

export const GetPublicResource = async (url) => {
  const { data, error } = await callApi(getPublicConfig(url, "GET"));

  return {
    data: data || null,
    error,
  };
};

export const GetProtectedResource = async (url, accessToken) => {
  const { data, error } = await callApi(
    getProtectedConfig(url, "GET", accessToken)
  );

  return {
    data: data || null,
    error,
  };
};

export const PostProtectedResource = async (url, accessToken, values) => {
  const { data, error } = await callApi(
    getProtectedConfig(url, "POST", accessToken, values)
  );
  console.log("ERROR::", error);
  return {
    data: data || null,
    error,
  };
};

export const DeleteProtectedResource = async (url, accessToken) => {
  const { data, error } = await callApi(
    getProtectedConfig(url, "DELETE", accessToken)
  );

  return {
    data: data || null,
    error,
  };
};

export const UpdateProtectedResource = async (url, accessToken, values) => {
  const { data, error } = await callApi(
    getProtectedConfig(url, "PATCH", accessToken, values)
  );

  return {
    data: data || null,
    error,
  };
};
