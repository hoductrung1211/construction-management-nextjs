import CostEstimate from "./CostEstimate";
import CostEstimateTask from "./CostEstimateTask";
import WorkItem from "./WorkItem";

export default interface CostestimateWorkitem {
  workitemid: string;
  workitem_code: string;
  workitemname: string;
  tasks: CostEstimateTask[];
}
