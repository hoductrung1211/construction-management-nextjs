"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Icon from "@/components/Icon"; 
import costEstimateAPI from "@/apis/costEstimate";
import ICostEstimateWorkItem from "@/models/CostEstimateWorkItem";
import { Dayjs } from "dayjs";
import { IEmployee } from "@/models/Employee";

export interface IPlanWorkItemSectionProps {
    costEstimateId: number;
    planEstimate: {
        startDate: Dayjs | null;
        endDate: Dayjs | null;
        approver?: IEmployee;
    }
}

export default function PlanWorkItemSection({
    costEstimateId,
    planEstimate,
}: IPlanWorkItemSectionProps) {
    const [workItems, setWorkItems] = useState<ICostEstimateWorkItem[]>([])

    useEffect(() => {
        fetchWorkItems();
    }, []);

    async function fetchWorkItems() {
        const data = await costEstimateAPI.getListCostEstimateTasks(costEstimateId);
        setWorkItems(data);
    }

    async function handleCreatePlan() {
        const formBodyData = {
            startdate: planEstimate.startDate?.toDate(),
            enddate: planEstimate.endDate?.toDate(),
            planname: "WTF Plan NAME???", // WTF???
            mdConstructionSite: 1, // DO WE REALLY NEED TO PASS A CONSTRUCTION SITE ID???
            approvers: [planEstimate.approver?.employeeid],
            listPlanWorkItem: [

            ]
        };

        console.log(formBodyData);
    }

    return (
        <section className="flex-grow pb-6 flex flex-col bg-white rounded-md ">
            <header className="h-12 px-10 text-apple-gray bg-white flex gap-10 items-center rounded-t-md">
                <p className="w-60">
                    <span className="font-semibold">Số lượng hạng mục</span>
                    {/* {' '}{selectedWorkItems.length}/{workItems.length} */}
                </p>
                <p className="w-60">
                    <span className="font-semibold">Số lượng công việc</span>
                    {/* {' '}{totalOfSelectedTasks}/{totalOfTasks} */}
                </p>
            </header>
            {/* {workItems.map(wi => (
                <PlanWorkItem
                    key={wi.workItemCode}
                    workItem={wi}
                    onWorkItemChange={handleChangeWorkItem}
                />
            ))} */}
            <footer className="h-40 p-3 flex justify-end items-center gap-5">
                <Button
                    color="success"
                    className="min-w-[100px] bg-success flex justify-center items-center gap-5"
                    variant="contained"
                    onClick={handleCreatePlan}
                >
                    <Icon name="floppy-disk" size="xl" />
                    Lưu
                </Button>
                {/* <Button
                    color="info"
                    className="min-w-[100px] bg-primary flex justify-center items-center gap-5"
                    variant="contained"
                >
                    <Icon name="paper-plane" size="xl" />
                    Gửi
                </Button> */}
            </footer>
        </section>
    )
}