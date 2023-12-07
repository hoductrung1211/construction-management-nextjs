"use client";

import React, { useState } from "react";
import Icon from "../Icon"; 

export default function ListProductsDiary() {
  const listProducts = [
    {
      id: "#PD0001",
      pdName: "Xi măng",
      pdUnit: "Bao",
      pdAmount: 5,
    },
    {
      id: "#PD0002",
      pdName: "Cát",
      pdUnit: "m3",
      pdAmount: 100,
    },
    {
      id: "#PD0003",
      pdName: "Đá",
      pdUnit: "m3",
      pdAmount: 80,
    },
  ];

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
        <div>
          <Icon name="plus" size="lg" className="text-text-color" />
        </div>
      </div>
      <div className="listProducts py-3 mx-3 bg-white">
        {isShow && listProducts.map((item, idx) => (
          <div
            key={idx}
            className=" flex justify-between mx-9 my-2 items-center"
          >
            <p className=" w-3">{idx}</p>
            <p className=" w-14">{item.id}</p>
            <p className=" w-60">{item.pdName}</p>
            <p className=" w-10">{item.pdUnit}</p>
            <div className="w-20">
              <input
                type="number"
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <span className=" w-2 mr-2">
              <Icon size="lg" className="text-text-color" name="xmark" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
 