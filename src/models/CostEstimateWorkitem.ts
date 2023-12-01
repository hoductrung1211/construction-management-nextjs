import CostEstimate from "./CostEstimate";
import WorkItem from "./WorkItem";

export default interface CostestimateWorkitem {
  costestimateworkitemid: string;
  mdCostEstimate: CostEstimate;
  mdWorkItem: WorkItem;
}
