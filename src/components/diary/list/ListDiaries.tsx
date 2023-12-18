"use client";

import IDiary from "@/models/Diary";
import React from "react";
import { useRouter } from "next/navigation";


export default function ListDiaries({ lsDiaries,
  handleDoubleClick
}: { lsDiaries: IDiary[], handleDoubleClick: (id: number) => void}) {


  return (
      <div className=" bg-[#FAFAFC] mx-4 p-4 flex-col">
        <div className="title flex my-2">
          <p className=" font-semibold w-full text-center select-none">ID+Tên công trình</p>
          <p className=" font-semibold w-full text-center select-none">ID+Nhật ký</p>
          <p className=" font-semibold w-full text-center select-none">ID+Tên hạng mục</p>
          <p className=" font-semibold w-full text-center select-none">ID+Tên công việc</p>
          <p className=" font-semibold w-full text-center select-none">Đơn vị</p>
          <p className=" font-semibold w-full text-center select-none">
            Khối lượng hoàn thành
          </p>
          <p className=" font-semibold w-full text-center grow select-none">Nhật ký ngày</p>
        </div>
        <div className=" lsplan flex-col">
          {lsDiaries.map((item, idx) => (
            <div className="flex hover:bg-apple-gray-5 cursor-pointer py-3" key={idx} onDoubleClick={() => handleDoubleClick(item.diaryid)}>
              <p className="w-full text-center select-none">
                
                #{item.cmsPlanTask.cmsPlan.mdConstructionSite.constructionsiteid}-
                {
                  item.cmsPlanTask.cmsPlan.mdConstructionSite
                    .constructionsitename
                }
              </p>
              <p className="w-full text-center select-none">#{item.diaryidcode}</p>

              <p className=" w-full text-center select-none">
                #{item.cmsPlanTask.mdWorkItem.workitemCode}-
                {item.cmsPlanTask.mdWorkItem.workitemname}
              </p>
              <p className=" w-full text-center select-none line-clamp-1">
                #{item.cmsPlanTask.mdTask.taskcode}-
                {item.cmsPlanTask.mdTask.taskname}
              </p>
              <p className=" w-full text-center select-none">
                {item.cmsPlanTask.mdTask.mdQuantityUnit.quantityunitname}
              </p>
              <p className=" w-full text-center select-none">{item.cmsProgresses?.amountofworkdone}</p>
              <p className=" w-full text-center select-none">{item.dateofdiary}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
