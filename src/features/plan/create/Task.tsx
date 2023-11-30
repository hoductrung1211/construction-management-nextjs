import IconButton from "@/components/IconButton";
import { getDuration } from "@/utils/functions/getDuration";
import { Checkbox } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";

export interface ITask {
    isSelected: boolean;
    taskCode: string;
    taskName: string;
    startDate: Date | null;
    endDate: Date | null;
}

export default function Task({
    task,
    orderIndex,
    onChangeTask,
}: {
    task: ITask,
    orderIndex: number;
    onChangeTask: (newTask: ITask) => void;
}) {
    const {
        isSelected,
        startDate,
        endDate,
        taskCode,
        taskName
    } = task; 
    const [currentStartDate, setCurrentStartDate] = useState<Dayjs | null>(null);
    const [currentEndDate, setCurrentEndDate] = useState<Dayjs | null>(null);

    const duration = (endDate != null && startDate != null)
        ? (getDuration(startDate, endDate)) : 0;

    function handleChangeIsSelected(e: ChangeEvent<HTMLInputElement>) {
        onChangeTask({
            ...task,
            isSelected: e.target.checked
        });
    }

    function handleChangeStartDate(value: Dayjs | null) {
        setCurrentStartDate(value);
        onChangeTask({
            ...task,
            startDate: value?.toDate() ?? null
        })
    }

    function handleChangeEndDate(value: Dayjs | null) {
        setCurrentEndDate(value);
        onChangeTask({
            ...task,
            endDate: value?.toDate() ?? null
        });
    }

    return (
        <div className="h-16 pl-16 pr-2 flex justify-between items-center hover:bg-apple-gray-6 bg-white">
            <div className="flex gap-6 items-center">
                <Checkbox
                    checked={isSelected}
                    onChange={handleChangeIsSelected}
                />
                <div className="w-6 text-end">{orderIndex}</div>
            </div>
            <div className="flex w-120 gap-3 ">
                <span className="font-semibold">
                    {taskName}
                </span>
                #{taskCode}
            </div>
            <DatePicker
                label="Ngày bắt đầu"
                format="DD-MM-YYYY"
                value={currentStartDate}
                slotProps={{ textField: { size: "small" } }}
                maxDate={currentEndDate ?? undefined}
                onChange={handleChangeStartDate}
            />
            <DatePicker
                label="Ngày bắt đầu"
                format="DD-MM-YYYY"
                slotProps={{ textField: { size: "small" } }}
                minDate={currentStartDate ?? undefined}
                onChange={handleChangeEndDate}
            />
            <div className="w-24 text-end">
                {duration} Days
            </div>
            <IconButton name="up-right-from-square" />
        </div>
    )
}

