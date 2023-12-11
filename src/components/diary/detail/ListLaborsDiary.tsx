"use client";

import React, { useState } from "react";
import Labors, { ILabor } from "./Labors";
import Icon from "@/components/Icon";


export interface ILaborList {
  labors: ILabor[];
}

export default function ListLaborsDiary({ lslabor }: { lslabor: ILaborList }) {
  const [isShow, setIsShow] = useState(true);

  function handleChangeIsShow() {
    setIsShow(!isShow);
  }
  
  return (
    <div className=" bg-background-color w-full rounded-lg">
      <header className="flex gap-20 justify-between items-center">
        <div className=" flex space-x-2 py-2">
          <Icon
            className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
            name={isShow ? "angle-down" : "angle-right"}
            onClick={handleChangeIsShow}
          />
          <p className="font-semibold text-text-color">
            Nhân công<span className="ml-4 font-thin">{lslabor.labors.length}</span>
          </p>
        </div>
      </header>
      {
        isShow && <div className="listLabors py-3 bg-white">
        {lslabor.labors.map((labor, idx) => (
          <Labors key={labor.laborCode} labor={labor} />
        ))}
      </div>
      }
    </div>
  );
}
