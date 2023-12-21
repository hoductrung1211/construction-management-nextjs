import IPlanTask from "./PlanTask";

export default interface IPlanWorkItem {
    orderindex: number;
    workitemid: number;
    workitemCode: string;
    workitemname: string;
    mdTasks: IPlanTask[]; // cmsPlanJSONDetail
}