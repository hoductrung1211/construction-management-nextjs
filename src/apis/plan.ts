import request from "./request";

export interface ICreatePlan {
    planname: string;
    startdate: string; // Date
    enddate: string; // Date

    mdConstructionSite: number;
    mdEmployee: number; // --- Creator ---
    
    approvers: number[];

    listPlanWorkItem: {
        orderIndex: number;
        workItemId: number;
        employeeId: number;

        tasks: {
            taskId: number;
            startdate: string; // Date
            enddate: string; // Date

            amountOfWork: number;
            quantityUnitId: number;

            orderIndex: number;
            costEstimateId: number;

            products: {
                productId: number;
                quantityUnit: number;
                consumptionAmount: number;
            }[];
            labors: {
                laborID: number;
            }[];
        }[];
    }[]; 
}

const planAPI = {
    create: (data: ICreatePlan) =>
        request.post("/plans/save", data),
};

export default planAPI;