import IconButton from "@/components/IconButton";
import WorkItem, { IWorkItem } from "./WorkItem";
import { useState } from "react";
import { Button } from "@mui/material";
import Icon from "@/components/Icon";

export default function WorkItemSection() {
    const [workItems, setWorkItems] = useState(initWorkItems);

    const selectedWorkItems = workItems.filter(w => w.isSelected);
    const totalOfSelectedTasks = selectedWorkItems.reduce((res, wi) => {
        return res + wi.tasks.filter(t => t.isSelected).length;
    }, 0);
    const totalOfTasks = workItems.reduce((res, wi) => {
        return res + wi.tasks.length;
    }, 0);

    function handleChangeWorkItem(newWorkItem: IWorkItem) {
        const idx = workItems.findIndex(wi => newWorkItem.workItemCode == wi.workItemCode);
        
        if (idx >= 0) {
            setWorkItems([
                ...workItems.slice(0, idx),
                newWorkItem,
                ...workItems.slice(idx + 1)
            ]);
        }
    }

    return (
        <section className="flex gap-5">
            <div className="flex-grow pb-6 flex flex-col bg-white rounded-md ">
                <header className="h-12 px-10 text-apple-gray bg-white flex gap-10 items-center rounded-t-md">
                    <p className="w-60">
                        <span className="font-semibold">Số lượng hạng mục</span>
                        {' '}{selectedWorkItems.length}/{workItems.length}
                    </p>
                    <p className="w-60">
                        <span className="font-semibold">Số lượng công việc</span>
                        {' '}{totalOfSelectedTasks}/{totalOfTasks}
                    </p>
                </header>
                {workItems.map(wi => (
                    <WorkItem
                        key={wi.workItemCode}
                        workItem={wi}
                        onWorkItemChange={handleChangeWorkItem}
                    />
                ))}
                <footer className="h-40 p-3 flex justify-end items-center gap-5">
                    <Button
                        color="success"
                        className="min-w-[100px] bg-success flex justify-center items-center gap-3"
                        variant="contained"
                    >
                        <Icon name="floppy-disk" size="xl" />
                        Lưu
                    </Button>
                    <Button
                        color="info"
                        className="min-w-[100px] bg-primary flex justify-center items-center gap-3"
                        variant="contained"
                    >
                        <Icon name="paper-plane" size="xl" />
                        Gửi
                    </Button>
                </footer>
            </div>
            <div className="pb-32 flex flex-col gap-4">
                <div className="sticky top-20 flex flex-col gap-4">
                    <IconButton name="bars-progress" tooltip="Hiển thị theo dạng danh sách" bgColor={true} /> 
                    <IconButton name="chart-gantt" tooltip="Hiển thị theo dạng Gantt Chart"  bgColor={true} /> 
                </div>

                <div className="sticky top-[580px] bot-10 flex flex-col gap-4">
                    <IconButton
                        name="angles-up"
                        bgColor={true}
                        tooltip="Cuộn lên đầu trang"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    /> 
                    <IconButton name="arrow-up" bgColor={true} /> 
                    <IconButton name="arrow-down" bgColor={true} /> 
                </div>
            </div>
        </section>
    )
}

const initWorkItems: IWorkItem[] = [
    {
        isSelected: true,
        orderIndex: 1,
        supervisorCode: '',
        workItemCode: 'WI0001',
        workItemName: 'Basic Construction',
        tasks: [
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK001',
                taskName: 'Clearing the Site'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK002',
                taskName: 'Soil Excavation for Foundation Trenches'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK003',
                taskName: 'Earthwork in Filling'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK010',
                taskName: 'Woodwork for Doors and Windows'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK011',
                taskName: 'Flooring and Tiling'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK012',
                taskName: 'Painting'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK013',
                taskName: 'Plastering Work'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK014',
                taskName: 'Masonry work'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK015',
                taskName: 'Shuttering (Formwork)'
            }
        ]
    },
    {
        isSelected: true,
        orderIndex: 2,
        supervisorCode: null,
        workItemCode: 'WI0002',
        workItemName: 'Advanced Construction',
        tasks: [
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK004',
                taskName: 'Damp-Proof Course (DPC)'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK005',
                taskName: 'Plain Cement Concrete (PCC) Works'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK006',
                taskName: 'Reinforced Cement Concrete Works'
            }
        ]
    },
    {
        isSelected: true,
        orderIndex: 3,
        supervisorCode: null,
        workItemCode: 'WI0003',
        workItemName: 'Finish Construction',
        tasks: [
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK007',
                taskName: 'Steel Work'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK008',
                taskName: 'Shuttering (Formwork)'
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK009',
                taskName: 'Masonry work'
            }
        ]
    }
]