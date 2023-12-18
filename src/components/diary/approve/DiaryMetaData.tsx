"use client";

import { IPDetailProps } from "@/components/plan/detail/PlanInfo";
import { useState } from "react";
import { IDiaryHistory } from "@/models/DiaryHistory";
import { Button} from "@mui/material";
import Icon from "@/components/Icon";

export default function PlanInfo({
  planCode,
  creatorDiary,
  createTime,
  stateDiary,
  lsHistory,
}: {
  planCode: string;
  creatorDiary: string;
  createTime: string;
  stateDiary: string;
  lsHistory: IDiaryHistory[];
}) {
  const isDisplayApprover = stateDiary.trim() === "Đã duyệt";
  const isDisplayConfirmer = stateDiary.trim() === "Đã đối chứng";
  const actionConfirmer = lsHistory.filter(
    (item) => item.cmsDiaryAction.diaryactionname.trim() === "Đã đối chứng"
  )[0];
  const actionApprover = lsHistory.filter(
    (item) => item.cmsDiaryAction.diaryactionname.trim() === "Duyệt"
  )[0];

  const handleSubmitConfirm = () => {}

  return (
    <div className=" flex flex-col justify-between h-full">
      <div className=" flex flex-col sticky top-20 rounded-md bg-white gap-2 p-4">
        <div className=" flex flex-col gap-2">
          <p className=" text-apple-gray">#{planCode}</p>
          <span className=" px-3 bg-[#C7E7E5] text-[#30C1A5] rounded-3xl font-semibold w-fit">
            {stateDiary}
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
                  {actionApprover.mdEmployee.firstname +
                    actionApprover.mdEmployee.lastname}
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
                  {actionConfirmer.mdEmployee.firstname +
                    actionConfirmer.mdEmployee.lastname}
                  <p className=" font-semibold">Ngày đối chứng</p>
                  {actionConfirmer.actiontime}
                </>
              )}
            </div>
          )}
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
            Xác nhận
          </Button>
        </div>
    </div>
  );
}
