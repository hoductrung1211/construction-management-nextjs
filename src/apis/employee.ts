import { IEmployee } from "@/models/Employee";
import request from "./request";

const employeeAPI = {
    getList: () => request.get<IEmployee[]>("/employees/search?name")
};

export default employeeAPI;