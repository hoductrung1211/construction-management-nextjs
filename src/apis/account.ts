import { IAccount } from "@/models/Account";
import request from "./request";

const accountAPI = {
  login: (username: string, password: string) => request.post<IAccount>(`/auth/login`, {username, password}),
  signup: (body: { username: string; password: string }) =>
    request.post<string>("/auth/signup", body),
};

export default accountAPI;