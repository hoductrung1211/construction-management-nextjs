import Task from "./Task";

export default interface WorkItem {
  workitemid?: string;
  workitemCode: string;
  workitemname: string;
  mdTasks: Task[];
}
