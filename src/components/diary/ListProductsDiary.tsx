"use client";

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
  return (
    <div className=" mt-4 bg-background-color w-full rounded-t-lg">
      <div className="flex gap-20 mx-10 justify-between">
        <div className=" flex space-x-2">
          <Icon className="text-text-color" name="chevron-down" />
          <p className="font-semibold text-text-color">
            Vật tư<span className="ml-4 font-thin">3</span>
          </p>
        </div>
        <div>
          <Icon name="plus" size="lg" className="text-text-color" />
        </div>
      </div>
      <div className="listProducts mx-3 bg-white">
        {listProducts.map((item, idx) => (
          <div
            key={idx}
            className=" flex justify-between mx-9 my-2 items-center"
          >
            <p className=" w-3">{idx}</p>
            <p className=" w-14">{item.id}</p>
            <p className=" w-60">{item.pdName}</p>
            <p className=" w-10">{item.pdUnit}</p>
            <p className=" w-10">{item.pdAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
