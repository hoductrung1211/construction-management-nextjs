"use client";

import Icon from "@/components/Icon";
import FilterPlan_Diary from "../FilterPlan_Diary";
import IDiary from "@/models/Diary";



export default function ListDiaries(
  {lsDiaries}:{
    lsDiaries: IDiary[]
  }
) {
  return (
    <div>
      <FilterPlan_Diary />
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
        <div className=" lsplan flex-col space-y-4">
          {lsDiaries.map((item, idx) => (
            <div className="flex" key={idx}>
            <p className="w-full text-center">
                #{item.cmsPlanTask.cmsPlan.mdConstructionSite.constructionsiteid}
                {item.cmsPlanTask.cmsPlan.mdConstructionSite.constructionsitename}
              </p>
              <p className="w-full text-center">
                #{item.diaryid}
              </p>
              
              <p className=" w-full text-center">
                #{item.cmsPlanTask.mdWorkItem.workitemCode}
                {item.cmsPlanTask.mdWorkItem.workitemname}
              </p>
              <p className=" w-full text-center line-clamp-1">
                #{item.cmsPlanTask.mdTask.taskcode}
                {item.cmsPlanTask.mdTask.taskname}
              </p>
              <p className=" w-full text-center">{item.cmsPlanTask.mdTask.mdQuantityUnit.quantityunitname}</p>
              <p className=" w-full text-center">
                Khối lượng hoàn thành
              </p>
              <div className=" w-full flex">
                <p className=" text-center grow">{item.dateofdiary}</p>
                <span className=" flex-none w-10">
                  <Icon
                      className=" text-text-color"
                      name="arrow-up-right-from-square"
                      />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}