import { IEmployee } from "./Employee";
import { IShift } from "./Shift";

export interface IDiaryEmployee {
  mdEmployee: IEmployee,
  plantasklaborid: number,
  shiftid?: number,
}

export interface IDiaryEmployeeDetail{
  diarytaskemployeeid: number,
  mdShift: IShift,
  laborsid: IEmployee,
}
