import WorkItem from "./WorkItem";
import QuantityUnit from "./QuantityUnit";

export default interface Task {
  taskid?: string;
  taskcode: string;
  taskname: string;
  mdQuantityUnit: QuantityUnit;
}
