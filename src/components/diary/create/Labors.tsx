import Icon from "@/components/Icon";
import { IEmployee } from "@/models/Employee";
import { IShift } from "@/models/Shift";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export interface ILabor {
  isSelected: boolean;
  no: number;
  laborCode: string;
  lastName: string;
  firstName: string;
  role: string;
  shift: number;
}
export default function Labors({
  labor,
  no,
  shiftList,
}: {
  labor: IEmployee;
  no: number;
  shiftList: IShift[];
}) {
  return (
    <div className=" bg-white flex justify-between mx-9 my-3 items-center">
      <p className=" w-3">{no}</p>
      <p className=" w-14">#{labor.userid}</p>
      <p className=" w-64">
        {labor.lastname} {labor.firstname}
      </p>
      <p className=" w-64">Công nhân</p>
      <FormControl size="small">
        <InputLabel id="label-construction-site-plan">Chọn ca làm</InputLabel>
        <Select className="w-40" labelId="label-shift" label="Chọn ca làm">
          {shiftList.map((item, idx) => (
            <MenuItem key={idx} value={item.shiftid}>
              {item.shiftname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <span className=" w-2 mr-2">
        <Icon size="lg" className="text-text-color" name="xmark" />
      </span>
    </div>
  );
}
