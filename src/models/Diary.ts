import dayjs, { Dayjs } from "dayjs";
import IFile from "./File";
import { IDiaryHistory } from "./DiaryHistory";

export default interface IDiary {
  diaryid: number;
  diaryidcode: string;
  cmsDiaryState: {
    diarystateid: number;
    diarystatename: string;
  };
  createdtime: string;
  starttime: string;
  endtime: string;
  cmsPlanTask: {
    plantaskid: number;
    amountofwork: number;
    cmsPlan: {
      planid: number;
      planidcode: string;
      planname: string;
      mdConstructionSite: {
        constructionsiteid: number;
        constructionsitename: string;
      };
    };
    mdTask: {
      taskid: number;
      taskcode: string;
      taskname: string;
      mdQuantityUnit: {
        quantityunitid: number;
        quantityunitname: string;
      };
    };
    mdWorkItem: {
      workitemid: number;
      workitemCode: string;
      workitemname: string;
    };
  };
  dateofdiary: string;
  mdEmployee: {
    employeeid: number;
    address: string;
    dateofbirth: string;
    email: string;
    firstname: string;
    gender: boolean;
    idcard: string;
    lastname: string;
    phone: string;
    userid: string;
    status: string;
  };
  mdWeather: {
    weatherid: number;
    weathername: string;
  };
  temperature: number;
  problem: string;
  cmsDiaryHistories: IDiaryHistory[];
  cmsProgresses: {
    progressid: number | 0;
    amountofworkdone: number | 0;
    totalamountofworkdone: number | 0;
  };
  cmsFiles: IFile[];
  amountofworkdone: number;
}
