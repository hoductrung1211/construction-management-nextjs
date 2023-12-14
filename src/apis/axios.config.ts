import originAxios, { AxiosError } from "axios";

const axios = originAxios.create({
  baseURL: "http://localhost:8080/api/", // change this
});
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token !== undefined && token)
    config.headers.Authorization = "Bearer " + token;

  (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;

      case 401:
        console.error("unauthorised");
        break;

      case 404:
        console.error("/not-found");
        break;

      case 500:
        console.error("/server-error");
        break;
    }
    return Promise.reject(error);
  };
  return config;
});

export default axios;

export interface IErrorResponse {
  errorMessages: string[];
}
