import dayjs, { Dayjs } from "dayjs";
import IFile from "./File";

export default interface IDiary{
    diaryid: number;
    diaryidcode: string;
    cmsDiaryState: {
        diarystateid: number;
        diarystatename: string;
    };
    createdtime: Dayjs;
    cmsPlanTask: {
        plantaskid: number;
        cmsPlan:{
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
            }
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
        status: string
    };
    mdWeather: {
        weatherid: number;
        weathername: string;
    };
    temperature: number;
    problem: string;
    cmsProgresses:{
        progressid: number;
        amountofworkdone: number;
        totalamountofworkdone: number;
    }
    cmsFiles: IFile[];
}