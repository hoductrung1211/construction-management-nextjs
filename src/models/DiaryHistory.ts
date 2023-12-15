import { IAction } from "./Action";
import { IEmployee } from "./Employee";

export interface IDiaryHistory{
    diaryhistoryid: number,
    actiontime: string,
    decsription: string,
    cmsDiaryAction: IAction,
    mdEmployee: IEmployee,
}