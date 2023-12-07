
import ConstructionSiteInfo from "./PlanInfo";
import { useState } from "react";
import { IPDetailProps } from "@/components/plan/detail/PlanInfo";
import PlanInfo from "./PlanInfo";

export interface IDRDetailProps {}
export default function DiaryInfo() {

  const [PLInfo, setPLInfo] = useState<IPDetailProps>();

  return (
    <div>
      {/* <DetailTitle workitemTask={}/> */}
      <section className=" flex gap-2">
        <div className="bg-[#F9FAFB] flex-none w-5/6">
          <div className="bg-white rounded-md flex-col">
            <p className=" font-semibold">Chi tiết nhật ký công trình</p>
            <div className="flex gap-6">
              <div className="grow bg-[#F9FAFB] rounded-2xl">
                <div className=" grid grid-cols-2 m-5 gap-4">
                  <div className="col-span-2 h-32">2</div>
                  <p className="text-center font-semibold">Ngày bắt đầu</p>
                  <p className="text-center">7:30 AM</p>
                  <p className="text-center font-semibold">Ngày kết thúc</p>
                  <p className="text-center">5:30 PM</p>
                </div>
              </div>
              <div className=" flex-none w-2/3 bg-[#F9FAFB] rounded-2xl">
                <div className=" grid grid-cols-4 m-5 gap-4">
                  <div className="col-span-4 h-32">bar</div>
                  <p className=" font-semibold">Khối lượng kế hoạch</p>
                  <p>
                    300<span>m3</span>
                  </p>
                  <p className=" font-semibold">Tổng tích lũy</p>
                  <p>
                    100<span>m3</span>
                  </p>
                  <p className=" font-semibold">Khối lượng hoàn thành</p>
                  <p>
                    60<span>m3</span>
                  </p>
                  <p className=" font-semibold">Khối lượng còn lại</p>
                  <p>
                    140<span>m3</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow">
            <PlanInfo plInfo={initPLInfo}/>
        </div>
      </section>
    </div>
  );
}

const initPLInfo : IPDetailProps = {
  plId: "#23PLAN00001",
  plName: "Thế Giới Di Động",
  startDate: new Date(2024, 2, 20),
  endDate: new Date(2024, 7, 20),
  creator: "Hồ Đức Trung",
  createTime: new Date(2023, 12, 20),
  approver: "Hồ Đức Trung",
  approvedTime: new Date(2023, 12, 22),
  csId: "#CS1232",
  csName:"TGDD",
  totalNumberOfEmployees: 240,
  totalNumberOfLabors: 1120,
  Supervision: "Hồ Đức Trung",
};

