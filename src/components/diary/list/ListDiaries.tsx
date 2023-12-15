"use client";

import Icon from "@/components/Icon";
import FilterDiary from "./FilterDiary";
import IDiary from "@/models/Diary";
import React from "react";
import { useRouter } from "next/navigation";


export default function ListDiaries({ lsDiaries}: { lsDiaries: IDiary[]}) {

  const router = useRouter();
  const handleDoubleClick = ( id: number) => {
    router.push("/construction-diaries/"+id);
  }


  return (
      <div className=" bg-[#FAFAFC] mx-4 p-4 flex-col">
        <div className="title flex my-2">
          <p className=" font-semibold w-full text-center">ID+Tên công trình</p>
          <p className=" font-semibold w-full text-center">ID+Nhật ký</p>
          <p className=" font-semibold w-full text-center">ID+Tên hạng mục</p>
          <p className=" font-semibold w-full text-center">ID+Tên công việc</p>
          <p className=" font-semibold w-full text-center">Đơn vị</p>
          <p className=" font-semibold w-full text-center">
            Khối lượng hoàn thành
          </p>
          <div className=" w-full flex">
            <p className=" font-semibold text-center grow">Nhật ký ngày</p>
            <span className=" flex-none w-10"></span>
          </div>
        </div>
        <div className=" lsplan flex-col">
          {lsDiaries.map((item, idx) => (
            <div className="flex hover:bg-apple-gray-5 cursor-pointer py-3" key={idx} onDoubleClick={() => handleDoubleClick(item.diaryid)}>
              <p className="w-full text-center">
                
                #{item.cmsPlanTask.cmsPlan.mdConstructionSite.constructionsiteid}-
                {
                  item.cmsPlanTask.cmsPlan.mdConstructionSite
                    .constructionsitename
                }
              </p>
              <p className="w-full text-center">#{item.diaryidcode}</p>

              <p className=" w-full text-center">
                #{item.cmsPlanTask.mdWorkItem.workitemCode}-
                {item.cmsPlanTask.mdWorkItem.workitemname}
              </p>
              <p className=" w-full text-center line-clamp-1">
                #{item.cmsPlanTask.mdTask.taskcode}-
                {item.cmsPlanTask.mdTask.taskname}
              </p>
              <p className=" w-full text-center">
                {item.cmsPlanTask.mdTask.mdQuantityUnit.quantityunitname}
              </p>
              <p className=" w-full text-center">{item.cmsProgresses.amountofworkdone}</p>
              <p className=" w-full text-center">{item.dateofdiary}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
