import ICostEstimateTask from "./CostEstimateTask";

export default interface ICostEstimateWorkItem {
    workItemId: number;
    workItemName: string;
    workItemCode: string;

    tasks: ICostEstimateTask[];
}