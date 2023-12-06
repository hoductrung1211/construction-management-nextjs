"use client";

import { useState } from "react";
import Icon from "../Icon";
import { Checkbox, FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CostestimateWorkitem from "@/models/CostEstimateWorkitem";
interface propsListWorkItem_Task {
  cEstimateWorkitem?: CostestimateWorkitem[];
}
export default function ListWorkItem_Task({
  cEstimateWorkitem,
}: propsListWorkItem_Task) {
  const [flagShowTask, setFlagShowTask] = useState(true);
  console.log(cEstimateWorkitem);

  const workItems = [
    {
      id: 1,
      isChecked: true,
      workItemName: "Dao mong",
      workItemId: "WI0321",
      supervision: "Ha Diem Quynh",
      NumberOfTask: 6,
      task: [
        {
          id: 1,
          taskId: "#DM001",
          taskName: "Lam sach",
          startDate: "12/12/2023",
          endDate: "15/13/2023",
        },
        {
          id: 2,
          taskId: "#DM002",
          taskName: "Lam sach",
          startDate: "12/12/2023",
          endDate: "15/13/2023",
        },
      ],
    },
    {
      id: 2,
      isChecked: true,
      workItemName: "Lop Ton",
      workItemId: "WI0123",
      supervision: "Ha Diem Quynh",
      NumberOfTask: 2,
      task: [
        {
          id: 1,
          taskId: "#DM001",
          taskName: "Lam sach",
          startDate: "12/12/2023",
          endDate: "15/13/2023",
        },
        {
          id: 2,
          taskId: "#DM002",
          taskName: "Lam sach",
          startDate: "12/12/2023",
          endDate: "15/13/2023",
        },
      ],
    },
    {
      id: 3,
      isChecked: false,
      workItemName: "Xay tuong",
      workItemId: "WI1231",
      supervision: "Ho Duc Trung",
      NumberOfTask: 4,
      task: [
        {
          id: 1,
          taskId: "#DM001",
          taskName: "Lam sach",
          startDate: "12/12/2023",
          endDate: "15/13/2023",
        },
        {
          id: 2,
          taskId: "#DM002",
          taskName: "Lam sach",
          startDate: "12/12/2023",
          endDate: "15/13/2023",
        },
      ],
    },
    {
      id: 4,
      isChecked: false,
      workItemName: "Son tuong",
      workItemId: "WI2311",
      supervision: "Dinh Truong Son",
      NumberOfTask: 1,
      task: [
        {
          id: 1,
          taskId: "#DM001",
          taskName: "Lam sach",
          startDate: "12/12/2023",
          endDate: "15/13/2023",
        },
        {
          id: 2,
          taskId: "#DM002",
          taskName: "Lam sach",
          startDate: "12/12/2023",
          endDate: "15/13/2023",
        },
      ],
    },
  ];

  function showListTask(idx: number) {
    if (
      document.getElementById("listTask" + idx)?.classList.contains("hidden")
    ) {
      document.getElementById("listTask" + idx)?.classList.remove("hidden");
      document
        .getElementById("iconWorkItem" + idx)
        ?.classList.remove("fa-angle-right");
      document
        .getElementById("iconWorkItem" + idx)
        ?.classList.add("fa-angle-down");
    } else {
      document.getElementById("listTask" + idx)?.classList.add("hidden");

      document
        .getElementById("iconWorkItem" + idx)
        ?.classList.remove("fa-angle-down");
    }
    document
      .getElementById("iconWorkItem" + idx)
      ?.classList.add("fa-angle-right");
  }

  return (
    <div className="px-3">
      <div className=" mt-4 py-3 bg-white w-full rounded-t-lg">
        <div className="flex gap-20 ml-8">
          <p className="font-semibold text-text-color">
            Tổng hạng mục<span className="ml-4 font-thin">8</span>
          </p>
          <p className="font-semibold text-text-color">
            Tổng công việc<span className="ml-4 font-thin">40</span>
          </p>
        </div>
      </div>
      <main>
        {cEstimateWorkitem?.map((workItem, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="px-3 flex justify-between bg-gray3">
              <section className="h-10 items-center flex">
                <span className="w-5 ml-8" onClick={() => showListTask(idx)}>
                  <Icon id={"iconWorkItem" + idx} name="angle-right" />
                </span>
                <span className="w-8 mr-4 text-primary">
                  <Checkbox
                    defaultChecked
                    //onChange={}
                  />
                </span>
                <span className="w-5 font-semibold">
                  {workItem?.workitemid}
                </span>
                <p className="w-48 font-semibold">{workItem?.workitemname}</p>
                <p className="w-28 text-text-color">
                  #{workItem?.workitem_code}
                </p>
                <p className="w-48 flex items-center gap-2 text-text-color">
                  <Icon name="user" />
                  {/* {workItem.supervision} */}
                  Ahihi
                </p>
                <p className="text-text-color font-semibold">
                  {workItem?.tasks.length}
                </p>
              </section>
              <section className="flex items-center">
                <span className="text-text-color mr-6">
                  <Icon name="user-plus" />
                </span>
              </section>
            </div>
            <div
              id={"listTask" + idx}
              className="hidden mx-4 bg-white  rounded-lg"
            >
              {workItem?.tasks.map((taskItem, key) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-1 my-2 ml-20"
                >
                  <Checkbox defaultChecked />
                  <p className="w-fit">{key + 1}</p>
                  <p className="w-fit">
                    {taskItem.taskcode}-{taskItem?.taskname}
                  </p>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="de"
                  >
                    <DatePicker
                      label="Ngày bắt đầu"
                      slotProps={{ textField: { size: "small" } }}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="de"
                  >
                    <DatePicker
                      label="Ngày kết thúc"
                      slotProps={{ textField: { size: "small" } }}
                    />
                  </LocalizationProvider>

                  <p className="w-fit">Thời gian kéo dài</p>
                  <p className="w-fit">Công việc tiên quyết</p>
                  <span className="text-text-color mr-6">
                    <Icon name="arrow-up-right-from-square" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
