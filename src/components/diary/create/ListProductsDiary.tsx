"use client";

import React, { useState } from "react";
import Icon from "../../Icon";
import Products, { IProduct } from "./Products";
import { IDiaryProduct } from "@/models/DiaryProduct";

export interface IProductList {
  products: IProduct[];
}

export default function ListProductsDiary({
  handleRemoveProduct,
  onChangeProduct,
  lsproduct,
}: {
  lsproduct: IDiaryProduct[];
  onChangeProduct: (product: IDiaryProduct[]) => void;
  handleRemoveProduct: (idx: number) => void;
}) {
  const [value, setValue] = React.useState<number>();

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

  function handleChangeProduct(no: number, productid: number, consumptionAmount: number) {
    var newProduct = lsproduct.find((item) => item.mdProduct.productid == productid) as IDiaryProduct;
    newProduct.consumptionAmount = consumptionAmount;
    onChangeProduct(lsproduct);
  }
  return (
    <div className=" mt-4 bg-background-color w-full rounded-t-lg">
      <div className="flex gap-20 justify-between">
        <div className=" flex space-x-2">
          <Icon
            className="ml-3 grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
            name={isShow ? "angle-down" : "angle-right"}
            onClick={handleChangeIsShow}
          />
          <p className="font-semibold text-text-color">
            Vật tư<span className="ml-4 font-thin">3</span>
          </p>
        </div>
      </div>
      {isShow && (
        <div className="listProducts py-3 mx-3 bg-white">
          {lsproduct &&
            lsproduct.map((product, idx) => (
              <Products
                key={idx}
                product={product}
                no={idx + 1}
                handleRemoveProduct={handleRemoveProduct}
                handleChangeProduct={handleChangeProduct}
              />
            ))}
        </div>
      )}
    </div>
  );
}