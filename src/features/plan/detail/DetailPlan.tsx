import PlanInfo from "@/components/plan/detail/PlanInfo";
import { useState } from "react";
import { IPDetailProps } from "@/components/plan/detail/PlanInfo"; 
import WorkItemSection from "./WorkItemSection";

export default function DetailPlan() {
    const [PLInfo, setPLInfo] = useState<IPDetailProps>(initPLInfo);
    return (
        <main className="flex flex-col gap-10 p-5 bg-[#ced6e0]">
            <PlanInfo 
            plInfo={PLInfo}/>
            <WorkItemSection
                
                />
        </main>
  );
}

const initPLInfo : IPDetailProps = {
  plId: "#23PLAN00001",
  plName: "Thế Giới Di Động",
  startDate: new Date(2024, 2, 20),
  endDate: new Date(2024, 7, 20),
  creator: "Hồ Đức Trung",
  createTime: new Date(2023, 12, 20),
  approver: "Hồ Đức Trung",
  approvedTime: new Date(2023, 12, 22),
  csId: "#CS1232",
  csName:"TGDD",
  totalNumberOfEmployees: 240,
  totalNumberOfLabors: 1120,
  Supervision: "Hồ Đức Trung",
};
