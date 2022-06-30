import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:4000" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer Token";
  const onSuccess = (response) => response;
  const onError = (error) => {
    // return error of can redirect to login page directly
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
