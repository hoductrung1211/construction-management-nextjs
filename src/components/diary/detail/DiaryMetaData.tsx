"use client";

import { IPDetailProps } from "@/components/plan/detail/PlanInfo";
import ConstructionSiteInfo from "./ConstructionSiteInfo";
import { useState } from "react";
import IConstructionSite from "@/models/ConstructionSite";
import { IDiaryHistory } from "@/models/DiaryHistory";

export default function PlanInfo({
  creatorDiary,
  createTime,
  stateDiary,
  lsHistory,
}: {
  creatorDiary: string;
  createTime: string;
  stateDiary: string;
  lsHistory: IDiaryHistory[];
}) {
  const [PLInfo, setPLInfo] = useState<IPDetailProps>();
  const isDisplayApprover = stateDiary.trim() === "Đã duyệt";
  const isDisplayConfirmer = stateDiary.trim() === "Đã đối chứng";

  return (
    <div className=" flex flex-col sticky top-20 rounded-md bg-white gap-2 p-4">
      {/* <ConstructionSiteInfo constructionSite={CSInfo} /> */}
      <div className=" flex flex-col gap-2">
        <p className=" text-apple-gray">#23PLAN00001</p>
        <span className=" px-3 bg-[#C7E7E5] text-[#30C1A5] rounded-3xl font-semibold w-fit">
          Doing
        </span>
      </div>
      <div className=" flex flex-col gap-2">
        <p className=" font-semibold">Người tạo</p>
        <p>{creatorDiary}</p>
        <p className=" font-semibold">Ngày tạo</p>
        <p>{createTime}</p>
        {isDisplayApprover && (
          <div>
            <p className=" font-semibold">Người duyệt</p>
            {lsHistory.filter( item => item.cmsDiaryAction.diaryactionname.trim() === "Duyệt")[0] != undefined &&
            lsHistory.filter( item => item.cmsDiaryAction.diaryactionname.trim() === "Duyệt")[0].mdEmployee.firstname}
            <p className=" font-semibold">Ngày duyệt</p>
            {lsHistory.filter( item => item.cmsDiaryAction.diaryactionname.trim() === "Duyệt")[0] != undefined &&
            lsHistory.filter( item => item.cmsDiaryAction.diaryactionname.trim() === "Duyệt")[0].actiontime}
            
          </div>
        )}
        {(isDisplayApprover || isDisplayConfirmer) && (
          <div>
            <p className=" font-semibold">Người đối chứng</p>
            {/* {lsHistory.filter( item => item.cmsDiaryAction.diaryactionname.trim() === "Đã đối chứng")[0].mdEmployee.firstname} */}
            <p className=" font-semibold">Ngày đối chứng</p>
            {/* {lsHistory.filter( item => item.cmsDiaryAction.diaryactionname.trim() === "Đã đối chứng")[0].actiontime} */}
          </div>
        )}
      </div>
    </div>
  );
}
