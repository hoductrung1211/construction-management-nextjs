import ICostEstimateTask from "./CostEstimateTask";

export default interface ICostEstimateWorkItem {
    workitemid: string;
    workitemname: string;
    workitemcode: string;
        
    tasks: ICostEstimateTask[];
}