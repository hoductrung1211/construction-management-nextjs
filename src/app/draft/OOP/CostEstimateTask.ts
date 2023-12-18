export default interface ICostEstimateTask {
    taskId: number;
    taskName: string;
    taskCode: string;

    amountOfWork: number;
    quantityUnitName: string;
}