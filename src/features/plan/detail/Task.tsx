import Icon from "@/components/Icon";
import { getDuration } from "@/utils/functions/getDuration";


export interface ITask {
    isSelected: boolean;
    taskCode: string;
    taskName: string;
    startDate: Date | null;
    endDate: Date | null;
}

export default function Task({
    task,
    orderIndex
}: {
    task: ITask,
    orderIndex: number
}) {
    const {
        startDate,
        endDate,
        taskCode,
        taskName
    } = task; 

    const duration = (endDate != null && startDate != null)
        ? (getDuration(startDate, endDate)) : 0;

    return (
        <div className="h-16 pl-16 pr-2 flex justify-between items-center hover:bg-apple-gray-6 bg-white">
            <span className="w-6 text-apple-gray text-end">{orderIndex}</span>
                <span className=" w-80 font-semibold">
                    {taskName}
                </span>
                <span className=" w-10 text-apple-gray">
                    #{taskCode}
                </span>
                <span className=" w-32 text-apple-gray">
                    {startDate?.toLocaleDateString("en-gb")}
                </span>
                <span className=" w-32 text-apple-gray">
                    {endDate?.toLocaleDateString("en-gb")}
                </span>
                <span className=" w-32 text-apple-gray">
                    {duration} ngày
                </span>
            <Icon className="  w-32 text-apple-gray cursor-pointer" name="up-right-from-square" />
        </div>
    )
}

