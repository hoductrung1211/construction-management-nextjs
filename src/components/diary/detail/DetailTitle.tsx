
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
        <div className="flex ml-5">
          <div className=" flex-col pr-5">
            <p className="font-semibold  text-center">{workitemName}</p>
            <p className="font-thin text-center text-text-color">{workitemId}</p>
          </div>
          <div className=" flex-col px-5 border-x-2 border-text-color">
            <p className="font-semibold text-center">{taskName}</p>
            <p className="font-thin text-center text-text-color">{taskName}s</p>
          </div>
        </div>
    )
}