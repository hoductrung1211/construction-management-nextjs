import ICostEstimateTask from "./CostEstimateTask";

export default interface ICostEstimateWorkItem {
    workitemid: number;
    workitemname: string;
    workitem_code: string;
        
    taskDTOs: ICostEstimateTask[];
}