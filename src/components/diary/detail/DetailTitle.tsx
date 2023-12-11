"use client";
export interface IWTDetailProps{
  workitemId: string,
  workitemName: string,
  taskId: string,
  taskName: string
}
export default function DetailTitle(
  {
    workitemTask: {
      workitemId,
      workitemName,
      taskId,
      taskName,
    }
}: {
  workitemTask: IWTDetailProps
}
){
    return(
        <div className="flex border-2 border-[#E5E7EB] p-2">
          <div className=" flex-col pr-5 ml-5">
            <p className="font-semibold  text-center">Xây móng</p>
            <p className="font-thin text-center text-text-color">#WT0001</p>
          </div>
          <div className=" flex-col px-5 border-x-2 border-text-color">
            <p className="font-semibold text-center">Đào móng</p>
            <p className="font-thin text-center text-text-color">#TK0001</p>
          </div>
        </div>
    )
}