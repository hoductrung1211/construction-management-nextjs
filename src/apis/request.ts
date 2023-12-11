import { AxiosResponse } from "axios";
import axios from "./axios.config";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) =>
    axios
      .get<T>(url)
      .then(responseBody)
      .catch((error) => {
        console.log(error);
      }),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

export default request;
