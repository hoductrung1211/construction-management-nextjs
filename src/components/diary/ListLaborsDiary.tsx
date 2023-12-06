"use client";

import React, { useState } from "react";
import Icon from "../Icon";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Labors, { ILabor } from "./Labors";

export interface ILaborList {
  labors: ILabor[];
}

export default function ListLaborsDiary({ lslabor }: { lslabor: ILaborList }) {
  const [isShow, setIsShow] = useState(true);

  function handleChangeIsShow() {
    setIsShow(!isShow);
  }
  //   const {
  //     setModal,
  //     setIsOpenModal,
  // } = useModal();
  // const { labors} = lslabor;
  return (
    <div className=" mt-4 bg-background-color w-full rounded-t-lg">
      <header className="flex gap-20 mx-10 justify-between">
        <div className=" flex space-x-2 mb-3">
        <Icon
                    className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
                    name={isShow ? "angle-down" : "angle-right"}
                    onClick={handleChangeIsShow}
                />
          <p className="font-semibold text-text-color">
            Nhân công<span className="ml-4 font-thin">3</span>
          </p>
        </div>
        <div>
          <Icon name="plus" size="lg" className="text-text-color" />
        </div>
      </header>
      {isShow &&
        listLabors.map((labor, idx) => (
          // <Labors key={labor.laborCode} labor={labor} />
          <p key={labor.id}>{labor.firstName}</p>
        ))}
    </div>
  );
}
const listLabors = [
  {
    id: "#EL0001",
    firstName: "Diễm Quỳnh",
    lastName: "Hà",
    role: "Công nhân",
    shift: 8,
  },
  {
    id: "#EL0002",
    firstName: "Hồ Hoàng Vy",
    lastName: "Chu",
    role: "Công nhân",
    shift: 4,
  },
  {
    id: "#EL0003",
    firstName: "Thị Vân Khánh",
    lastName: "Nguyễn",
    role: "Công nhân",
    shift: 8,
  },
];
