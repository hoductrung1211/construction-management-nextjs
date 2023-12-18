import { IEmployee } from "@/models/Employee";
import request from "./request";

export const enum LaborType {
    Worker = 1,
    Supervisor = 2,
}

const employeeAPI = {
    getList: (laborType: LaborType) =>
        request.get<IEmployee[]>(`/employees/search?labor=${laborType}&name`)
};

export default employeeAPI;