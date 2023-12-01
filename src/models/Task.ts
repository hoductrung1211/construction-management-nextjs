import WorkItem from "./WorkItem";
import QuantityUnit from "./QuantityUnit";

export default interface Task {
  taskid?: string;
  taskname: string;
  mdWorkItem: WorkItem;
  mdQuantityUnit: QuantityUnit;
}
