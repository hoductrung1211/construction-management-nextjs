"use client";

import React, { useState } from "react";
import Icon from "../../Icon";
import Labors, { ILabor } from "./Labors";
import { IDairyEmployee } from "@/models/DiaryEmployee";

export interface ILaborList {
  labors: ILabor[];
}

export default function ListLaborsDiary({
  lslabor,
}: {
  lslabor: IDairyEmployee[];
}) {
  const [isShow, setIsShow] = useState(true);

  function handleChangeIsShow() {
    setIsShow(!isShow);
  }
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
          {lslabor.map((labor, idx) => (
            <Labors
              key={labor.mdEmployee.userid}
              labor={labor.mdEmployee}
              no={idx + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
