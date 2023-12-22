import IPlan from "@/models/Plan";
import request from "./request";
import IPlanTaskProduct from "@/models/PlanTaskProduct";
import IPlanTaskLabor from "@/models/PlanTaskLabor";
import IPlanWorkItem from "@/models/PlanWorkItem";

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

interface IApprovePlan {
    id: number;
    actorid: number;
    actionid: number;
    description: string;
}

export const enum PlanListType {
    Init = 1,
    Approved = 2,
    Rejected = 3,
}

const planAPI = {
    create: (data: ICreatePlan) => request.post("/plans/save", data),
    approve: (approve: IApprovePlan) => request.post("plans/approve", approve),
    getList: (type: PlanListType) => request.get<IPlan[]>(`/plans?id=${type}`), // TODO ???
    getPlanWorkItemsByPlanId: (planId: number) => request.get<IPlanWorkItem[]>(`/plans/getlistbyplanid/${planId}`),
    getProductsByPlanTaskId: (planTaskId: number) => request.get<IPlanTaskProduct[]>(`/plans/plantaskproduct/${planTaskId}`),
    getLaborsByPlanTaskId: (planTaskId: number) => request.get<IPlanTaskLabor[]>(`/plans/plantasklabor/${planTaskId}`),
};

export default planAPI;