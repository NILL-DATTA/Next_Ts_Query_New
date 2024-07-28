import axios, { AxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";

const adminUrl = "https://wtsacademy.dedicateddevelopers.us/api";
export const baseURL = adminUrl;
const cookie = new Cookies();
const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const token = cookie.get("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
