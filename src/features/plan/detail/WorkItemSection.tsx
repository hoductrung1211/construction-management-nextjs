import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import { IWorkItem } from "@/features/plan/create/WorkItem";
import { Button } from "@mui/material";
import { useState } from "react";
import WorkItem from "./WorkItem";

export default function WorkItemSection() {

  const [workItems, setWorkItems] = useState(initWorkItems);
  const totalOfTasks = workItems.reduce((res, wi) => {
    return res + wi.tasks.length;
}, 0);

  return (
    <section className="flex gap-5">
      <div className="flex-grow pb-6 flex flex-col bg-white rounded-md ">
        <header className="h-12 px-10 text-apple-gray bg-white flex gap-10 items-center rounded-t-md">
          <p className="w-60">
            <span className="font-semibold">Số lượng hạng mục</span>{" "}
            {workItems.length}
          </p>
          <p className="w-60">
            <span className="font-semibold">Số lượng công việc</span>{" "}
            {totalOfTasks}
          </p>
        </header>
        {workItems.map((wi) => (
          <WorkItem
            key={wi.workItemCode}
            workItem={wi}
          />
        ))}
      </div>
      <div className="pb-32 flex flex-col gap-4">
        <div className="sticky top-20 flex flex-col gap-4">
          <IconButton
            name="bars-progress"
            tooltip="Hiển thị theo dạng danh sách"
            bgColor={true}
          />
          <IconButton
            name="chart-gantt"
            tooltip="Hiển thị theo dạng Gantt Chart"
            bgColor={true}
          />
        </div>

        <div className="sticky top-[580px] bot-10 flex flex-col gap-4">
          <IconButton
            name="angles-up"
            bgColor={true}
            tooltip="Cuộn lên đầu trang"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
          <IconButton name="arrow-up" bgColor={true} />
          <IconButton name="arrow-down" bgColor={true} />
        </div>
      </div>
    </section>
  );
}

const initWorkItems: IWorkItem[] = [
  {
    isSelected: true,
    orderIndex: 1,
    supervisorCode: "#EL0001",
    workItemCode: "WI0001",
    workItemName: "Basic Construction",
    tasks: [
      {
        isSelected: true,
        startDate: new Date(2023,8,10),
        endDate: new Date(2023,8,12),
        taskCode: "TSK001",
        taskName: "Clearing the Site",
      },
      {
        isSelected: true,
        startDate: new Date(2023,8,13),
        endDate: new Date(2023,8,15),
        taskCode: "TSK002",
        taskName: "Soil Excavation for Foundation Trenches",
      },
      {
        isSelected: true,
        startDate: new Date(2023,8,16),
        endDate: new Date(2023,8,18),
        taskCode: "TSK003",
        taskName: "Earthwork in Filling",
      },
      {
        isSelected: true,
        startDate: new Date(2023,8,19),
        endDate: new Date(2023,8,21),
        taskCode: "TSK010",
        taskName: "Woodwork for Doors and Windows",
      },
      {
        isSelected: true,
        startDate: new Date(2023,8,23),
        endDate: new Date(2023,8,25),
        taskCode: "TSK011",
        taskName: "Flooring and Tiling",
      },
      {
        isSelected: true,
        startDate: new Date(2023,8,27),
        endDate: new Date(2023,8,29),
        taskCode: "TSK012",
        taskName: "Painting",
      },
      {
        isSelected: true,
        startDate: new Date(2023,8,31),
        endDate: new Date(2023,9,2),
        taskCode: "TSK013",
        taskName: "Plastering Work",
      },
      {
        isSelected: true,
        startDate: new Date(2023,9,3),
        endDate: new Date(2023,9,5),
        taskCode: "TSK014",
        taskName: "Masonry work",
      },
      {
        isSelected: true,
        startDate: new Date(2023,9,6),
        endDate: new Date(2023,9,8),
        taskCode: "TSK015",
        taskName: "Shuttering (Formwork)",
      },
    ],
  },
  {
    isSelected: true,
    orderIndex: 2,
    supervisorCode: "#EL0005",
    workItemCode: "WI0002",
    workItemName: "Advanced Construction",
    tasks: [
      {
        isSelected: true,
        startDate: new Date(2023,9,9),
        endDate: new Date(2023,9,11),
        taskCode: "TSK004",
        taskName: "Damp-Proof Course (DPC)",
      },
      {
        isSelected: true,
        startDate: new Date(2023,9,12),
        endDate: new Date(2023,9,14),
        taskCode: "TSK005",
        taskName: "Plain Cement Concrete (PCC) Works",
      },
      {
        isSelected: true,
        startDate: new Date(2023,9,15),
        endDate: new Date(2023,9,17),
        taskCode: "TSK006",
        taskName: "Reinforced Cement Concrete Works",
      },
    ],
  },
  {
    isSelected: true,
    orderIndex: 3,
    supervisorCode: "#EL0008",
    workItemCode: "WI0003",
    workItemName: "Finish Construction",
    tasks: [
      {
        isSelected: true,
        startDate: new Date(2023,9,18),
        endDate: new Date(2023,9,20),
        taskCode: "TSK007",
        taskName: "Steel Work",
      },
      {
        isSelected: true,
        startDate: new Date(2023,9,21),
        endDate: new Date(2023,9,23),
        taskCode: "TSK008",
        taskName: "Shuttering (Formwork)",
      },
      {
        isSelected: true,
        startDate: new Date(2023,9,24),
        endDate: new Date(2023,9,26),
        taskCode: "TSK009",
        taskName: "Masonry work",
      },
    ],
  },
];
