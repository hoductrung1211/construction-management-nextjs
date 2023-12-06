"use client";

import Icon from "@/components/Icon";
import FilterPlan_Diary from "../FilterPlan_Diary";

export default function ListPlan() {
  return (
    <div>
      <FilterPlan_Diary />
      <div className=" bg-[#FAFAFC] mx-4 p-4 flex-col">
        <div className="title flex my-2">
          <p className=" font-semibold w-full text-center">ID+Tên kế hoạch</p>
          <p className=" font-semibold w-full text-center">Ngày bắt đầu</p>
          <p className=" font-semibold w-full text-center">Ngày kết thúc</p>
          <p className=" font-semibold w-full text-center">ID+Tên công trình</p>
          <div className=" w-full flex">
            <p className=" font-semibold text-center grow">Ngày tạo</p>
            <span className=" flex-none w-10"></span>
          </div>
        </div>
        <div className=" lsplan flex-col space-y-1">
          <div className="flex">
            <p className=" w-full text-center">ID+Tên kế hoạch</p>
            <p className=" w-full text-center">Ngày bắt đầu</p>
            <p className=" w-full text-center">Ngày kết thúc</p>
            <p className=" w-full text-center">ID+Tên công trình</p>
            <div className=" w-full flex">
              <p className=" grow text-center">Nhật ký ngày</p>
              <span className=" flex-none w-10">
                <Icon className=" text-text-color" name="arrow-up-right-from-square" />
              </span>
            </div>
          </div>
          <div className="flex">
            <p className=" w-full text-center">ID+Tên kế hoạch</p>
            <p className=" w-full text-center">Ngày bắt đầu</p>
            <p className=" w-full text-center">Ngày kết thúc</p>
            <p className=" w-full text-center">ID+Tên công trình</p>
            <div className=" w-full flex">
              <p className=" grow text-center">Nhật ký ngày</p>
              <span className=" flex-none w-10">
                <Icon className="text-text-color" name="arrow-up-right-from-square" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
