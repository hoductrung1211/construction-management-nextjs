import { IEmployee } from "./Employee";
import { ICreatePlanTask } from "./Task";

export interface ICreatePlanWorkItem {
    isSelected: boolean;
    orderIndex: number;

    workItemName: string;
    workItemCode: string;
    supervisor?: IEmployee;
    
    tasks: ICreatePlanTask[];
}
 