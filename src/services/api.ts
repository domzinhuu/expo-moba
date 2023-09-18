import axios from "axios";
import { AppError } from "../utils/AppErrors";
import { storageSessionRemove } from "@storage/storageToken";
import { storageUserRemove } from "@storage/storageUser";

const api = axios.create({
  baseURL: "https://api-hml.nodeb.com.br",
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(
        new AppError(error.response.data.message, error.response.status)
      );
    } else {
      return Promise.reject(error);
    }
  }
);

export { api };
