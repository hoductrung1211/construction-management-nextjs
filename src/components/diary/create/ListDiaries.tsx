"use client";

import FilterPlan_Diary from "@/components/FilterPlan_Diary";
import Icon from "@/components/Icon";


export default function ListDiaries() {
  return (
    <div>
      <FilterPlan_Diary />
      <div className=" bg-[#FAFAFC] mx-4 p-4 flex-col">
        <div className="title flex my-2">
          <p className=" font-semibold w-full text-center">ID</p>
          <p className=" font-semibold w-full text-center">ID+Tên công trình</p>
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
        <div className=" lsplan flex-col space-y-1">
          <div className="flex">
            <p className="w-full text-center">ID</p>
            <p className="w-full text-center">
              ID+Tên công trình
            </p>
            <p className=" w-full text-center">ID+Tên hạng mục</p>
            <p className=" w-full text-center">
              ID+Tên công việc
            </p>
            <p className=" w-full text-center">Đơn vị</p>
            <p className=" w-full text-center">
              Khối lượng hoàn thành
            </p>
            <div className=" w-full flex">
              <p className=" text-center grow">Nhật ký ngày</p>
              <span className=" flex-none w-10">
                <Icon
                    className=" text-text-color"
                    name="arrow-up-right-from-square"
                    />
              </span>
            </div>
          </div>
          <div className="flex">
            <p className="w-full text-center">ID</p>
            <p className="w-full text-center">
              ID+Tên công trình
            </p>
            <p className=" w-full text-center">ID+Tên hạng mục</p>
            <p className=" w-full text-center">
              ID+Tên công việc
            </p>
            <p className=" w-full text-center">Đơn vị</p>
            <p className=" w-full text-center">
              Khối lượng hoàn thành
            </p>
            <div className=" w-full flex">
              <p className=" text-center grow">Nhật ký ngày</p>
              <span className=" flex-none w-10">
                <Icon
                    className=" text-text-color"
                    name="arrow-up-right-from-square"
                    />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
