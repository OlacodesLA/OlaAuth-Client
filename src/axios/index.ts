import { fmtResponse, getToken, hasToken } from "@/utils";
import axios from "axios";
import toast from "react-hot-toast";

const baseURL =
  import.meta.env.VITE_PUBLIC_NODE_ENV === "development"
    ? import.meta.env.VITE_PUBLIC_BASE_URL_STAGGING
    : import.meta.env.VITE_PUBLIC_BASE_URL_PRODUCTION;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

// request interceptor
axios.interceptors.request.use(
  function (config) {
    if (hasToken() && getToken() !== false) {
      config.headers.Authorization = `Bearer ${String(getToken())}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
service.interceptors.response.use(
  // @ts-ignore
  (response) => {
    // Return the entire AxiosResponse object
    return fmtResponse(response, false, toast);
  },
  function (error) {
    console.log(error, "this is the error from the interceptor----2");

    // Check if error is an axios error
    if (error && !error.response.data) {
      const { response } = error;
      return fmtResponse(response, true, toast);
    } else {
      const { response } = error;
      return fmtResponse(response, true, toast);
    }
  }
);

export default service;
