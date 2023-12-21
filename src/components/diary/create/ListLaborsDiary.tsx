"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import Icon from "../../Icon";
import Labors, { ILabor } from "./Labors";
import { IDiaryEmployee } from "@/models/DiaryEmployee";
import { IShift } from "@/models/Shift";
import diaryApi from "@/apis/diary";
import { SelectChangeEvent } from "@mui/material";

export interface ILaborList {
  labors: ILabor[];
}

export default function ListLaborsDiary({
  lslabor,
  onChangeLabor,
  handleRemoveLabor: handleRemoveLabor,
}: {
  lslabor: IDiaryEmployee[];
  onChangeLabor: (labor: IDiaryEmployee[]) => void;
  handleRemoveLabor: (idx: string) => void;
}) {
  8;
  const [isShow, setIsShow] = useState(true);
  const [shiftList, setShiftList] = React.useState<IShift[]>([]);
  const fetchInitialShiftData = async () => {
    const sList: IShift[] = (await diaryApi.getShift()) || [];
    setShiftList(sList);
  };

  React.useEffect(() => {
    fetchInitialShiftData();
  }, []);
  function handleChangeIsShow() {
    setIsShow(!isShow);
  }

  const handleChangeLabor = (idx: string, shiftid: string, no: number) => {
    var newLabor = lslabor.find((item) => item.mdEmployee.userid == idx) as IDiaryEmployee;
    newLabor.shiftid = parseInt(shiftid);
    onChangeLabor(lslabor);
    // var temp = newListLabor.splice(no,0,newLabor as IDairyEmployee);
  };

  return (
    <div className=" mt-4 bg-background-color w-full rounded-t-lg">
      <header className="flex gap-20 justify-between">
        <div className=" flex space-x-2">
          <Icon
            className="ml-3 grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
            name={isShow ? "angle-down" : "angle-right"}
            onClick={handleChangeIsShow}
          />
          <p className="font-semibold text-text-color">
            Nhân công<span className="ml-4 font-thin">3</span>
          </p>
        </div>
      </header>
      {isShow && (
        <div className="listLabors py-3 mx-3 bg-white">
          {lslabor &&
            lslabor.map((labor, idx) => (
              <Labors
                key={labor.mdEmployee.userid}
                labor={labor.mdEmployee}
                no={idx + 1}
                handleRemoveLabor={handleRemoveLabor}
                handleChangeLabor={handleChangeLabor}
                shiftList={shiftList}
              />
            ))}
        </div>
      )}
    </div>
  );
}