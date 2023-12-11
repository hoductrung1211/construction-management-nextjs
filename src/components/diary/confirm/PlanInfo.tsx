"use client";
import { IPDetailProps } from "@/components/plan/detail/PlanInfo";
import { IContructionSite, initCSInfo } from "@/models/ConstructionSite";
import { useState } from "react";
import ConstructionSiteInfo from "../detail/ConstructionSiteInfo";
import { Button } from "@mui/material";
import Icon from "@/components/Icon";

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
    <div className=" flex flex-col justify-between h-full">
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
      <div className="w-5/6 mx-auto flex justify-between gap-3 mb-3">
                    <Button
                        color="success"
                        className="min-w-[100px] bg-red-600 flex justify-center items-center gap-3"
                        variant="contained"
                    >
                        <Icon name="xmark" size="xl" />
                        Từ chối
                    </Button>
                    <Button
                        color="info"
                        className="min-w-[100px] bg-primary flex justify-center items-center gap-3"
                        variant="contained"
                    >
                        <Icon name="check" size="xl" />
                        Đồng ý
                    </Button>
                </div>
    </div>
  );
}
