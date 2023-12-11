"use client";

import { IPDetailProps } from "@/components/plan/detail/PlanInfo";
import ConstructionSiteInfo from "./ConstructionSiteInfo";
import { useState } from "react";
import IConstructionSite from "@/models/ConstructionSite";

export default function PlanInfo({
  plInfo: {
    plId,
    plName,
    startDate,
    endDate,
    creator,
    createTime,
    approver,
    approvedTime,
    csId,
    csName,
    totalNumberOfEmployees,
    totalNumberOfLabors,
    Supervision,
  },
}: {
  plInfo: IPDetailProps;
}) {
  const [CSInfo, setCSInfo] = useState<IConstructionSite>(example);
  const [PLInfo, setPLInfo] = useState<IPDetailProps>();
  return (
    <div className=" flex flex-col sticky top-20 rounded-md bg-white gap-2 p-4">
      <ConstructionSiteInfo constructionSite={CSInfo} />
      <div className=" flex flex-col gap-2">
        <p className=" font-semibold">Người tạo</p>
        <p>Hồ Đức Trung</p>
        <p className=" font-semibold">Ngày tạo</p>
        <p>20/11/2023</p>
        <p className=" font-semibold">Người duyệt</p>
        <p>Hồ Đức Trung</p>
        <p className=" font-semibold">Ngày duyệt</p>
        <p>22/11/2023</p>
      </div>
    </div>
  );
}

const example = {
  "address": "123 Main Street, City A",
      "constructionsiteid": 1,
      "constructionsitecode": "CS001",
      "constructionsitename": "Thế Giới Di Động Lê Văn Việt",
      "startdate": "2023-01-01",
      "enddate": "2023-12-31",
      "mdEmployee": {
          "employeeid": 1,
          "address": "123 Main St",
          "dateofbirth": "1990-01-01",
          "email": "john@example.com",
          "firstname": "Hieu",
          "gender": true,
          "idcard": "123456789",
          "lastname": "Doe",
          "phone": "123-456-7890",
          "userid": "user123"
      },
      "mdConstructionType": {
          "constructiontypeid": 1,
          "constructiontypename": "Supper mini",
          "mdBrand": {
              "brandid": 1,
              "brandname": "Thế Giới Di Động",
              "mdCompany": {
                  "companyid": 1,
                  "companyaddress": "123 Đường ABC, Quận 1, Thành phố HCM",
                  "companyname": "Công ty TGDD"
              }
          }
      },
      "mdConstructionState": {
          "constructionstateid": 1,
          "constructionstatename": "Đã duyệt"
      }
}