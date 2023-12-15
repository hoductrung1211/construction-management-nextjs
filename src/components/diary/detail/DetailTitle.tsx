"use client";

export default function DetailTitle({
  workitemCode,
  workitemName,
  taskCode,
  taskName,
}: {
  workitemCode: string;
  workitemName: string;
  taskCode: string;
  taskName: string;
}) {
  return (
    <div className="flex border-2 border-[#E5E7EB] p-2">
      <div className=" flex-col pr-5 ml-5">
        <p className="font-semibold  text-center">{workitemName}</p>
        <p className="font-thin text-center text-text-color">#{workitemCode}</p>
      </div>
      <div className=" flex-col px-5 border-x-2 border-text-color">
        <p className="font-semibold text-center">{taskName}</p>
        <p className="font-thin text-center text-text-color">#{taskCode}</p>
      </div>
    </div>
  );
}
