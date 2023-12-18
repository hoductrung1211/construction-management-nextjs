import { AxiosResponse } from "axios";
import axios from "./axios.config";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const controller = new AbortController();

const request = {
  get: <T>(url: string) =>
    axios
      .get<T>(url, {signal: controller.signal})
      .then(responseBody)
      .catch((error) => {
        console.log(error);
      }),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

export default request;
