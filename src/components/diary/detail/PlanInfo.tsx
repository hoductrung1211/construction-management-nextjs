"use client";
import { IPDetailProps } from "@/components/plan/detail/PlanInfo";
import ConstructionSiteInfo from "./ConstructionSiteInfo";
import { IContructionSite, initCSInfo } from "@/models/ConstructionSite";
import { useState } from "react";

export default function PlanInfo({
  plInfo: {
    plId,
    plName,
    startDate,
    endDate,
    creator,
    createTime,
    approver,
    approvedTime,
    csId,
    csName,
    totalNumberOfEmployees,
    totalNumberOfLabors,
    Supervision,
  },
}: {
  plInfo: IPDetailProps;
}) {
  const [CSInfo, setCSInfo] = useState<IContructionSite>(initCSInfo);
  const [PLInfo, setPLInfo] = useState<IContructionSite>(initCSInfo);
  return (
    <div className=" flex flex-col sticky top-20 rounded-md bg-white gap-2 p-4">
      <ConstructionSiteInfo constructionSite={CSInfo} />
      <div className=" flex flex-col gap-2">
        <p className=" font-semibold">Người tạo</p>
        <p>Hồ Đức Trung</p>
        <p className=" font-semibold">Ngày tạo</p>
        <p>20/11/2023</p>
        <p className=" font-semibold">Người duyệt</p>
        <p>Hồ Đức Trung</p>
        <p className=" font-semibold">Ngày duyệt</p>
        <p>22/11/2023</p>
      </div>
    </div>
  );
}
