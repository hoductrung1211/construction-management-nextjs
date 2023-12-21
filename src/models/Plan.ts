import { IEmployee } from "./Employee";

export default interface IPlan {
    planid: number;
    planname: string;
    planidcode: string;

    startdate: string;
    enddate: string;
    
    mdEmployee: IEmployee;
    cmsPlanState: IPlanState;
    mdEmployees: IEmployee[];

    // mdConstructionSite: number;
    // approvers: number[];
}

export interface IPlanState {
    planstateid: number;
    planstatename: string;
}