import IconButton from "@/components/IconButton";
import PopupTaskInfo from "@/components/plan/create/PopupTaskInfo";
import useModal from "@/hooks/useModal";
import { IEmployee } from "@/models/Employee";
import { ICreatePlanTask } from "@/models/Task";
import { getDuration } from "@/utils/functions/getDuration";
import { Checkbox } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";
 
export default function Task({
    task,
    orderIndex,
    onChangeTask,
}: {
    task: ICreatePlanTask,
    orderIndex: number;
    onChangeTask: (newTask: ICreatePlanTask) => void;
}) {
    const {
        isSelected,
        startDate,
        endDate,
        taskCode,
        taskName,
        labors,
        products
    } = task;
    const [currentStartDate, setCurrentStartDate] = useState<Dayjs | null>(null);
    const [currentEndDate, setCurrentEndDate] = useState<Dayjs | null>(null);

    const {
        setModal,
    } = useModal();

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
        <div className="h-16 pl-16 pr-2 flex justify-between items-center hover:bg-content bg-white">
            <div className="flex gap-6 items-center">
                <Checkbox
                    checked={isSelected}
                    onChange={handleChangeIsSelected}
                />
                <div className="w-6 text-apple-gray text-end">{orderIndex}</div>
            </div>
            <div className="flex w-120 gap-3 ">
                <span className="font-semibold">
                    {taskName}
                </span>
                <span className="text-apple-gray">
                    #{taskCode}
                </span>
            </div>
            <DatePicker
                label="Ngày bắt đầu"
                format="DD-MM-YYYY"
                value={currentStartDate}
                slotProps={{ textField: { size: "small" } }}
                minDate={dayjs()}
                maxDate={currentEndDate ?? undefined}
                onChange={handleChangeStartDate}
            />
            <DatePicker
                label="Ngày kết thúc"
                format="DD-MM-YYYY"
                slotProps={{ textField: { size: "small" } }}
                minDate={currentStartDate ?? undefined}
                onChange={handleChangeEndDate}
            />
            <div className="w-24 text-end">
                {duration} ngày
            </div>
            <IconButton
                name="up-right-from-square"
                onClick={() => {
                    setModal({
                        children:
                            <PopupTaskInfo
                                key={labors.toString()}
                                labors={labors}
                                products={products}
                                onChangeLabors={(newLabors: IEmployee[]) => {
                                    onChangeTask({
                                        ...task,
                                        labors: newLabors
                                    });
                                }}
                                onChangeProducts={() => {}}
                            />
                    });
                }}
            />
        </div>
    )
}

