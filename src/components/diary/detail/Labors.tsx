"use client";

import { IDiaryEmployeeDetail } from "@/models/DiaryEmployee";


export interface ILabor{
    isSelected: boolean;
    no: number;
    laborCode: string;
    lastName: string;
    firstName: string;
    role: string,
    shift: number
}
export default function Labors({
    no, labor
}:{
    no: number;
    labor: IDiaryEmployeeDetail
}
){ 
    return(
        <div
        className=" bg-white flex justify-between mx-9 my-3 items-center"
      >
        <p className=" w-3">{no}</p>
        <p className=" w-14">{labor.laborsid.employeeid}</p>
        <p className=" w-64">
          {labor.laborsid.lastname} {labor.laborsid.firstname}
        </p>
        <p className=" w-64">Công nhân</p>
        <p className=" w-64">Ca - HC</p>
      </div>  
    )
}