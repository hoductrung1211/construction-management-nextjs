import Icon from "@/components/Icon";
import { IEmployee } from "@/models/Employee";
import { IShift } from "@/models/Shift";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

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
  handleRemoveLabor: handleRemoveLabor,
  handleChangeLabor,
  shiftList,
}: {
  labor: IEmployee;
  no: number;
  shiftList: IShift[];
  handleRemoveLabor: (idx: string) => void;
  handleChangeLabor: (idx: string, shiftid: string, no: number) => void;
}) {
  const [shift, setShift] = useState<string>("");

  function handleChangeShiftLabor(event: SelectChangeEvent) {
    setShift(event.target.value);
    handleChangeLabor(labor.userid, event.target.value, no-1);
  }

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
        <Select
          className="w-40"
          labelId="label-shift"
          label="Chọn ca làm"
          value={shift}
          onChange={handleChangeShiftLabor}
        >
          {shiftList.map((item, idx) => (
            <MenuItem key={idx} value={item.shiftid}>
              {item.shiftname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <span className=" w-2 mr-2 cursor-pointer" onClick={() => handleRemoveLabor(labor.userid)}>
        <Icon size="lg" className="text-text-color" name="xmark" />
      </span>
    </div>
  );
}