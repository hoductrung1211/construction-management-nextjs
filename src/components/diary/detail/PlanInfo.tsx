import { IPDetailProps } from "@/components/plan/detail/PlanInfo";

export default function PlanInfo(
    {
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
      }
){
    return(
        <div className=" flex-col gap-2 rounded-md bg-white">
            <p className=" text-apple-gray">#23PLAN00001</p>
            <span className=" px-3 bg-[#C7E7E5] text-[#30C1A5] rounded-3xl font-semibold">Doing</span>
        </div>
    )
}