"use client";

import React, { useState } from "react";
import Icon from "../Icon";
import Products, { IProduct } from "./Products";

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
    <div className=" mt-4 bg-background-color w-full rounded-t-lg">
      <div className="flex gap-20 mx-10 justify-between">
        <div className=" flex space-x-2 mb-3">
          <Icon
            className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
            name={isShow ? "angle-down" : "angle-right"}
            onClick={handleChangeIsShow}
          />
          <p className="font-semibold text-text-color">
            Vật tư<span className="ml-4 font-thin">3</span>
          </p>
        </div>
      </div>
      {isShow && <div className="listProducts py-3 mx-3 bg-white">
        {lsproduct.products.map((product, idx) => (
          <Products key={idx} product={product}/>
        ))}
      </div>}
    </div>
  );
}
