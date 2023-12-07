import ICostEstimateTask from "./CostEstimateTask";

export default interface ICostEstimateWorkItem {
    workitemid: number;
    workitemname: string;
    workitemcode: string;
        
    tasks: ICostEstimateTask[];
}