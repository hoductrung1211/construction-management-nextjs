import { ICSDetailProps } from "@/components/plan/ConstructionSiteDetail";
import { ICEDetailProps } from "@/components/plan/CostEstimateDetail";
import { IPLInfoTitle } from "@/components/plan/PlanInfoTitle";
import PlanInfo from "@/components/plan/approved/PlanInfo";

import { useState } from "react";
import WorkItemSection from "./WorkItemSection";

export default function ApprovedView() {
  const [PLInfo, setPLInfo] = useState<IPLInfoTitle>(initPLInfo);
  const [CSInfo, setCSInfo] = useState<ICSDetailProps>(initCSInfo);
  const [CEInfo, setCEInfo] = useState<ICEDetailProps>(initCEInfo);
  return (
    <main className="flex flex-col gap-10 p-5 bg-[#ced6e0]">
      <PlanInfo plInfo={PLInfo} csInfo={CSInfo} ceInfo={CEInfo} />
      <WorkItemSection />
    </main>
  );
}

const initPLInfo = {
  plId: "#PLAN251515",
  plName: "Thế giới di động",
};

const initCSInfo = {
  csId: "",
  csName: "",
  address: "",
  brand: "",
  creator: "",
  createdTime: new Date(2024, 11, 20),
  endDate: new Date(2024, 11, 20),
  startDate: new Date(2024, 11, 20),
};

const initCEInfo = {
  ceId: "",
  ceName: "",
  createdTime: new Date(2024, 11, 20),
  creator: "",
  totalWorkItems: 10,
  totalCost: 1000000000,
};
