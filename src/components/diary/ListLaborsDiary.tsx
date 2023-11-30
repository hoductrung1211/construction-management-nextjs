"use client";

import Icon from "../Icon";

export default function ListLaborsDiary() {
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
  return (
    <div className=" mt-4 bg-background-color w-full rounded-t-lg">
      <div className="flex gap-20 mx-10 justify-between">
        <div className=" flex space-x-2">
          <Icon className="text-text-color" name="chevron-down" />
          <p className="font-semibold text-text-color">
            Nhân công<span className="ml-4 font-thin">3</span>
          </p>
        </div>
        <div>
          <Icon name="plus" size="lg" className="text-text-color" />
        </div>
      </div>
      <div className="listLabors mx-3 bg-white">
        {listLabors.map((item, idx) => (
          <div
            key={idx}
            className=" flex justify-between mx-9 my-2 items-center"
          >
            <p className=" w-3">{idx}</p>
            <p className=" w-14">{item.id}</p>
            <p className=" w-64">
              {item.lastName} {item.firstName}
            </p>
            <p className=" w-64">{item.role}</p>
            <p className=" w-64">{item.shift}</p>
            <span className=" w-2 mr-2">
              <Icon size="lg" className="text-text-color" name="xmark" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
