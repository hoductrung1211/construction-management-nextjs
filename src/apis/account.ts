import request from "./request";

interface Account {
  username: string;
  password: string;
}

const APIAccount = {
  login: (account: Account) => request.post<Account>(`auth/login`, account),
};

export default APIAccount;
