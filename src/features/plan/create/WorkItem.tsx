import Icon from "@/components/Icon";
import Task, { ITask } from "./Task"; 
import { Checkbox } from "@mui/material";
import { ChangeEvent, useState } from "react";
import IconButton from "@/components/IconButton";

export interface IWorkItem {
    isSelected: boolean;
    orderIndex: number;
    workItemName: string;
    workItemCode: string;
    supervision: string;
    tasks: ITask[]
}

export default function WorkItem({
    workItem,
    onWorkItemChange,
}: {
    workItem: IWorkItem,
    onWorkItemChange: (newWI: IWorkItem) => void;
}) {
    const {
        isSelected,
        orderIndex,
        supervision,
        tasks,
        workItemCode,
        workItemName,
    } = workItem;

    const [isShow, setIsShow] = useState(true);

    function handleChangeIsSelected(e: ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;

        if (!checked) {
            setIsShow(false);
        }

        onWorkItemChange({
            ...workItem,
            isSelected: checked,
        })
    }

    function handleChangeIsShow() {
        if (isSelected)
            setIsShow(!isShow);
    }
    
    function handleChangeTask(newTask: ITask) {
        const idx = tasks.findIndex(t => t.taskCode == newTask.taskCode);

        if (idx >= 0) {
            onWorkItemChange({
                ...workItem,
                tasks: [
                    ...tasks.slice(0, idx),
                    newTask,
                    ...tasks.slice(idx + 1),
                ]
            })
        }
    }

    return (
        <section className="flex flex-col">
            <header className={`sticky top-16 h-14 px-2 flex gap-6 items-center justify-start text-apple-gray bg-apple-gray-5 hover:bg-apple-gray-6 z-10 overflow-hidden`}>
                <Icon
                    className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
                    name={isShow ? "angle-down" : "angle-right"}
                    onClick={handleChangeIsShow}
                />
                <Checkbox
                    className=" "
                    checked={isSelected}
                    onChange={handleChangeIsSelected}
                />
                <span className="w-6 text-end">{orderIndex}</span>
                <div className="w-80 flex gap-3  ">
                    <p className="text-dark font-semibold">
                        {workItemName}
                    </p>
                    <span className="text-apple-gray">#{workItemCode}</span>
                </div>
                <div className="flex gap-3 items-center ">
                    <Icon name="user" />
                    {supervision}
                </div>
                <IconButton className="ml-auto " name="user-plus" />
            </header>
            {
                isShow && tasks.map((task, idx) => (
                    <div className="">
                        <Task
                            key={task.taskCode}
                            task={task}
                            orderIndex={idx + 1}
                            onChangeTask={handleChangeTask}
                        />
                    </div>
                ))
            }
        </section>
    )
}