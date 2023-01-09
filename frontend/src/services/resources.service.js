import { useAuth0 } from "@auth0/auth0-react";
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

const getProtectedConfig = (url, method, accessToken) => {
  return {
    url: apiServerUrl + url,
    method: method,
    headers: {
      "content-type": "application/json",
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

export const PostProtectedResource = async (url) => {
  const { getAccessTokenSilently } = useAuth0();
  const accessToken = await getAccessTokenSilently();
  const { data, error } = await callApi(
    getProtectedConfig(url, "POST", accessToken)
  );

  return {
    data: data || null,
    error,
  };
};

export const DeleteProtectedResource = async (url) => {
  const { getAccessTokenSilently } = useAuth0();
  const accessToken = await getAccessTokenSilently();
  const { data, error } = await callApi(
    getProtectedConfig(url, "DELETE", accessToken)
  );

  return {
    data: data || null,
    error,
  };
};

export const UpdateProtectedResource = async (url) => {
  const { getAccessTokenSilently } = useAuth0();
  const accessToken = await getAccessTokenSilently();
  const { data, error } = await callApi(
    getProtectedConfig(url, "PATCH", accessToken)
  );

  return {
    data: data || null,
    error,
  };
};
