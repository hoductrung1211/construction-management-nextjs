export interface IPLInfoTitle {
  plId: string;
  plName: string;
}

export default function PlanInfoTitle({
  plInfo: { plId, plName }
}: {
  plInfo: IPLInfoTitle;
}) {
  return (
    <div className=" flex-col">
      <p className=" text-xl text-[#487EB0]">{plName}</p>
      <p className=" text-text-color">{plId}</p>
    </div>
  );
}
