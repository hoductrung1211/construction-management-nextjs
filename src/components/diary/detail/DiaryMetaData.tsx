"use client";

import { IPDetailProps } from "@/components/plan/detail/PlanInfo";
import ConstructionSiteInfo from "./ConstructionSiteInfo";
import { useState } from "react";
import IConstructionSite from "@/models/ConstructionSite";
import { IDiaryHistory } from "@/models/DiaryHistory";

export default function PlanInfo({
  planCode,
  creatorDiary,
  createTime,
  stateID: stateID,
  stateName,
  lsHistory,
}: {
  planCode: string;
  creatorDiary: string;
  createTime: string;
  stateID: number;
  stateName: string;
  lsHistory: IDiaryHistory[];
}) {
  const [PLInfo, setPLInfo] = useState<IPDetailProps>();
  const isDisplayApprover = stateID=== 3;
  const isDisplayConfirmer = stateID===2;
  const actionConfirmer = lsHistory.filter(
    (item) => item.cmsDiaryAction.diaryactionid === 2
  )[0];
  const actionApprover = lsHistory.filter(
    (item) => item.cmsDiaryAction.diaryactionid === 3
  )[0];

  return (
    <div className=" flex flex-col sticky top-20 rounded-md bg-white gap-2 p-4">
      <div className=" flex flex-col gap-2">
        <p className=" text-apple-gray">#{planCode}</p>
        <span
          className={` px-3  ${
            stateID == 1
              ? "bg-[#CCE0F1] text-[#3498DB]"
              : (stateID == 2
              ? "bg-[#EAE5A5] text-[#C9B917]"
              : (stateID == 3
              ? "bg-[#C7E7E5] text-[#30C1A5]"
              : (stateID == 4
              ? "bg-[#ebbfba] text-[#E74C3C]"
              : "bg-[#ebbfba] text-[#E74C3C]")))
          } rounded-3xl font-semibold w-fit`}
        >
          {stateName}
        </span>
      </div>
      <div className=" flex flex-col gap-2">
        <p className=" font-semibold">Người tạo</p>
        <p>{creatorDiary}</p>
        <p className=" font-semibold">Ngày tạo</p>
        <p>{createTime}</p>
        {isDisplayApprover && (
          <div>
            {actionApprover != undefined && (
              <>
                <p className=" font-semibold">Người duyệt</p>
                {actionApprover.mdEmployee.firstname + actionApprover.mdEmployee.lastname}
                <p className=" font-semibold">Ngày duyệt</p>

                {actionApprover.actiontime}
              </>
            )}
          </div>
        )}
        {(isDisplayApprover || isDisplayConfirmer) && (
          <div>
            {actionConfirmer != undefined && (
              <>
                <p className=" font-semibold">Người đối chứng</p>
                {actionConfirmer.mdEmployee.firstname + actionConfirmer.mdEmployee.lastname}
                <p className=" font-semibold">Ngày đối chứng</p>
                {actionConfirmer.actiontime}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}