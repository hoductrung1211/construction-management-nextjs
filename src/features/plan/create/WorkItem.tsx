import Icon from "@/components/Icon";
import Task, { ITask } from "./Task"; 
import { Checkbox } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import IconButton from "@/components/IconButton";
import useModal from "@/hooks/useModal"; 
// import PopupAddSupervisor from "@/legacy/plan/PopupAddSupervisor";
import PopupAddSupervisor from "@/components/plan/create/PopupAddSupervisor";

export interface IWorkItem {
    isSelected: boolean;
    orderIndex: number;
    workItemName: string;
    workItemCode: string;
    supervisorCode: string | null,
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
        supervisorCode,
        tasks,
        workItemCode,
        workItemName,
    } = workItem;
    
    console.log("supervisorCode", supervisorCode);

    const supervisor = listLabors.find(ee => ee.id == supervisorCode)

    const [isShow, setIsShow] = useState(true);
    const {
        setModal,
        setIsOpenModal,
    } = useModal();

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
                <section className="flex items-center gap-2 ml-auto">
                    <div className="flex gap-3 items-center ">
                        {supervisor ?
                            <p className="flex gap-2">
                                <span className="font-bold">{supervisor.firstName + " " + supervisor.lastName}</span>
                                {supervisor.id}
                            </p> :
                            <span>Chưa chọn người giám sát</span>    
                        }
                    </div>
                    <IconButton
                        className=""
                        name="user-plus"
                        tooltip="Thêm người giám sát"
                        onClick={() => {
                            setModal({
                                children:
                                    <PopupAddSupervisor
                                        selectedSupervisorId={supervisorCode}
                                        onChangeSupervisor={(eeCode: string | null) => {
                                            onWorkItemChange({
                                                ...workItem,
                                                supervisorCode: eeCode
                                            });

                                            setIsOpenModal(false);
                                        }}
                                    />
                            });
                        }}
                    />
                </section>
            </header>
            {
                isShow && tasks.map((task, idx) => (
                    <Task
                        key={task.taskCode}
                        task={task}
                        orderIndex={idx + 1}
                        onChangeTask={handleChangeTask}
                    />
                ))
            }
        </section>
    )
}

export const listLabors = [
    {
      id: "#EL0001",
      firstName: "Diễm Quỳnh",
      lastName: "Hà",
    },
    {
      id: "#EL0002",
      firstName: "Hồ Hoàng Vy",
      lastName: "Chu",
    },
    {
      id: "#EL0003",
      firstName: "Thị Vân Khánh",
      lastName: "Nguyễn",
    },
    {
        id: "#EL0004",
        firstName: "Phuong Nam",
        lastName: "Dang",
      },
      {
        id: "#EL0005",
        firstName: "Truong Son",
        lastName: "Dinh",
      },
      {
        id: "#EL0006",
        firstName: "Van B",
        lastName: "Nguyễn",
    },
    {
        id: "#EL0007",
        firstName: "Van A",
        lastName: "Nguyen",
      },
      {
        id: "#EL0008",
        firstName: "Nho Hoc",
        lastName: "Le",
      },
      {
        id: "#EL0009",
        firstName: "Duc Trung",
        lastName: "Ho",
      },
];

// function Popup() {
//     return (
//         <div className="bg-white w-[800px] h-[400px] rounded-md overflow-hidden">
//             <PopupAddSupervisor />
//         </div>
//     )
// }