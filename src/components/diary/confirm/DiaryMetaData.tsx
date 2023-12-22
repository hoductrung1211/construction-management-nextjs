"use client";

import { IDiaryHistory } from "@/models/DiaryHistory";
import { Button } from "@mui/material";
import Icon from "@/components/Icon";
import { getVNLocaleDateString } from "@/utils/functions/getLocaleDateString";
import { ISaveHistory } from "@/models/ISaveHistory";
import diaryApi from "@/apis/diary";
import { useRouter } from "next/navigation";
import useAlert from "@/hooks/useAlert";

export default function PlanInfo({
  planCode,
  creatorDiary,
  createTime,
  stateID: stateID,
  stateName,
  lsHistory,
  diaryId,
}: {
  diaryId: number;
  planCode: string;
  creatorDiary: string;
  createTime: string;
  stateID: number;
  stateName: string;
  lsHistory: IDiaryHistory[];
}) {
  const setAlert = useAlert();
  const router = useRouter();
  const isDisplayApprover = stateID=== 3;
  const isDisplayConfirmer = stateID===2;
  const actionConfirmer = lsHistory.filter(
    (item) => item.cmsDiaryAction.diaryactionid === 2
  )[0];
  const actionApprover = lsHistory.filter(
    (item) => item.cmsDiaryAction.diaryactionid === 3
  )[0];

  const handleSubmitConfirm = () => {
    var temp: ISaveHistory = {
      id: diaryId,
      actorid: 1,
      actionid: 2,
      description: "",
    };

    try {
      diaryApi.saveApprove(temp);
      setAlert({ severity: "success", message: "Đối chứng thành công" });
      router.push("/construction-diaries");
    } catch (error) {
      console.log(error);
    }
  };

  function rejectConfirm() {
    var temp: ISaveHistory = {
      id: diaryId,
      actorid: 1,
      actionid: 4,
      description: "",
    };

    try {
      diaryApi.saveApprove(temp);
      setAlert({ severity: "success", message: "Từ chối thành công" });
      router.push("/construction-diaries");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" flex flex-col justify-between h-full">
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
          <p>{getVNLocaleDateString(createTime)}</p>
          {isDisplayApprover && (
            <div>
              {actionApprover != undefined && (
                <>
                  <p className=" font-semibold">Người duyệt</p>
                  {actionApprover.mdEmployee.firstname + actionApprover.mdEmployee.lastname}
                  <p className=" font-semibold">Ngày duyệt</p>

                  {getVNLocaleDateString(actionApprover.actiontime)}
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
                  {getVNLocaleDateString(actionConfirmer.actiontime)}
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
          onClick={() => rejectConfirm()}
        >
          <Icon name="xmark" size="xl" />
          Từ chối
        </Button>
        <Button
          color="info"
          className="min-w-[100px] bg-primary flex justify-center items-center gap-3"
          variant="contained"
          onClick={() => handleSubmitConfirm()}
        >
          <Icon name="check" size="xl" />
          Đồng ý
        </Button>
      </div>
    </div>
  );
}

