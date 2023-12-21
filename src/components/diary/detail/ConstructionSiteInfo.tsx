"use client";

import IConstructionSite from "@/models/ConstructionSite";

export default function ConstructionSiteInfo({
  constructionSite: {
    constructionsiteid,
    constructionsitecode,
    constructionsitename,
    address,
    mdConstructionType,
    startdate,
    enddate,
    mdEmployee,
    mdConstructionState,
  },
}: {
  constructionSite: IConstructionSite;
}) {
  return (
    <div className=" flex flex-col gap-2">
      <p className=" text-apple-gray">#23PLAN00001</p>
      <span className=" px-3 bg-[#C7E7E5] text-[#30C1A5] rounded-3xl font-semibold w-fit">
        Doing
      </span>
    </div>
  );
}