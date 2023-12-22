"use client";

import React, { useState } from "react";
import Products from "./detail/Products";
import Icon from "@/components/Icon";
import { IDiaryProductDetail } from "@/models/DiaryProduct";


export default function ListProductsDiary({ lsproduct}: { lsproduct: IDiaryProductDetail[] }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: number | string
  ) => {
    setValue(value as number);
  };
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
          <p className="font-semibold text-text-color my-auto">
            Vật tư<span className="ml-4 font-thin">{lsproduct.length}</span>
          </p>
        </div>
      </header>
      {isShow && <div className="listProducts py-3 bg-white">
        {lsproduct.map((product, idx) => (
          <Products key={idx} no={idx+1} product={product}/>
        ))}
      </div>}
    </div>
  );
}