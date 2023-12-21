"use client";
import IconButton from "@/components/IconButton";
import { IEmployee } from "@/models/Employee";
import { Avatar } from "@mui/material";

interface ITaskLaborItemProps {
    labor: IEmployee,
    onUnselectLabor: () => void;
}

export default function TaskLaborItem({
    labor,
    onUnselectLabor,
}: ITaskLaborItemProps) {
    return (
        <div
            key={labor.employeeid}
            className="flex-shrink-0 h-20 px-3 grid grid-cols-4 items-center justify-items-start hover:bg-apple-gray-6 cursor-pointer rounded-md"
        >
            <Avatar>{labor.lastname?.[0]}</Avatar>
            <span>{labor.employeeid}</span>
            <span>{labor.firstname + " " + labor.lastname}</span>
            <IconButton
                className="justify-self-end"
                name="user-xmark"
                tooltip="Bỏ chọn nhân công"
                onClick={onUnselectLabor}
            />
        </div>
    )
}