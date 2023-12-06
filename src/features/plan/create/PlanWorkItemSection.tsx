import IconButton from "@/components/IconButton";
import { useState } from "react";
import { Button } from "@mui/material";
import Icon from "@/components/Icon";
import { ICreatePlanWorkItem, initWorkItems } from "@/models/WorkItem";
import PlanWorkItem from "./PlanWorkItem";

export default function PlanWorkItemSection() {
    const [workItems, setWorkItems] = useState(initWorkItems);

    const selectedWorkItems = workItems.filter(w => w.isSelected);
    const totalOfSelectedTasks = selectedWorkItems.reduce((res, wi) => {
        return res + wi.tasks.filter(t => t.isSelected).length;
    }, 0);
    const totalOfTasks = workItems.reduce((res, wi) => {
        return res + wi.tasks.length;
    }, 0);

    function handleChangeWorkItem(newWorkItem: ICreatePlanWorkItem) {
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
                    <PlanWorkItem
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

