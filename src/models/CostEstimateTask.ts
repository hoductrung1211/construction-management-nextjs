import CostEstimateWorkitem from "./CostEstimateWorkitem";
import Task from "./Task";

export default interface CostEstimateTask {
  costestimatetaskid: string;
  amountofwork: Number;
  laborquantity: Number;
  cmsCostestimateWorkitem: CostEstimateWorkitem;
  mdTask: Task;
}
