"use client";

import React, { useState } from "react";
import Products, { IProduct } from "./Products";
import Icon from "@/components/Icon";

export interface IProductList {
  products: IProduct[];
}

export default function ListProductsDiary({ lsproduct}: { lsproduct: IProductList }) {
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
            Vật tư<span className="ml-4 font-thin">{lsproduct.products.length}</span>
          </p>
        </div>
      </header>
      {isShow && <div className="listProducts py-3 bg-white">
        {lsproduct.products.map((product, idx) => (
          <Products key={idx} product={product}/>
        ))}
      </div>}
    </div>
  );
}
