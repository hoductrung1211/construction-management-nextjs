import { useState } from "react";
import Icon from "@/components/Icon";


import PopupAddSupervisor from "@/legacy/plan/PopupAddSupervisor";
import { IWorkItem } from "../create/WorkItem";
import { TextField } from "@mui/material";
import Task from "../detail/Task";


export default function WorkItem({ workItem }: { workItem: IWorkItem }) {
  const {
    isSelected,
    orderIndex,
    supervisorCode,
    tasks,
    workItemCode,
    workItemName,
  } = workItem;

  const supervisor = listLabors.find((ee) => ee.id == supervisorCode);
  const [isShow, setIsShow] = useState(true);
  function handleChangeIsShow() {
    setIsShow(!isShow);
  }
  return (
    <section className="flex flex-col">
      <header
        className={`sticky top-16 h-14 px-2 flex gap-6 items-center justify-start text-apple-gray bg-apple-gray-5 hover:bg-apple-gray-6 z-10 overflow-hidden`}
      >
        <Icon
          className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
          name={isShow ? "angle-down" : "angle-right"}
          onClick={handleChangeIsShow}
        />
        <span className="w-6 text-end">{orderIndex}</span>
        <div className=" flex gap-2  ">
          <span className=" w-20 text-apple-gray">#{workItemCode}</span>
          <p className=" w-56 text-dark font-semibold">{workItemName}</p>
          <Icon name="user" className="text-apple-gray"/>
          <span className=" w-20 text-apple-gray">{supervisor?.id}</span>
          <span className=" w-40 font-bold">
            {supervisor?.firstName + " " + supervisor?.lastName}
          </span>
        </div>
      </header>
      {isShow &&
        tasks.map((task, idx) => (
          <Task key={task.taskCode} task={task} orderIndex={idx + 1} />
        ))}
    </section>
  );
}

export const listLabors = [
  {
    id: "#EL0001",
    firstName: "Diễm Quỳnh",
    lastName: "Hà",
  },
  {
    id: "#EL0002",
    firstName: "Hồ Hoàng Vy",
    lastName: "Chu",
  },
  {
    id: "#EL0003",
    firstName: "Thị Vân Khánh",
    lastName: "Nguyễn",
  },
  {
    id: "#EL0004",
    firstName: "Phuong Nam",
    lastName: "Dang",
  },
  {
    id: "#EL0005",
    firstName: "Truong Son",
    lastName: "Dinh",
  },
  {
    id: "#EL0006",
    firstName: "Van B",
    lastName: "Nguyễn",
  },
  {
    id: "#EL0007",
    firstName: "Van A",
    lastName: "Nguyen",
  },
  {
    id: "#EL0008",
    firstName: "Nho Hoc",
    lastName: "Le",
  },
  {
    id: "#EL0009",
    firstName: "Duc Trung",
    lastName: "Ho",
  },
];
