"use client";
import { IEmployee } from "@/models/Employee";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import PlanOverviewInfoLayout from "./PlanOverview/PlanOverviewInfoLayout";
import PlanWorkItemLayout from "./PlanWorkItem/PlanWorkItemLayout";
import PlanEstimate from "./PlanOverview/PlanEstimate";
import PlanWorkItemSection, { ITempPlanWorkItem } from "./PlanWorkItem/PlanWorkItemSection";
import planAPI, { ICreatePlan } from "@/apis/plan";
import useAlert from "@/hooks/useAlert";

export interface ICostEstimate {
    planName: string;
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    approver?: IEmployee;
}

export default function CreatePlan() {
    const setAlert = useAlert();

    const [viewState, setViewState] = useState<"list" | "gantt">("list");

    // 1. Lifted state up 
    // - Loaded by: <PlanOverviewInfoLayout />.
    // - Used by: <PlanWorkItemLayout /> to load initial CostEstimate WorkItems.
    const [costEstimateId, setCostEstimateId] = useState<number>();

    // 2. Also lifted state up 
    // - Loaded by: <PlanOverviewInfoLayout />.
    // - Used by: <PlanWorkItemLayout /> to create a Plan.
    const [planEstimate, setPlanEstimate] = useState<ICostEstimate>({
        planName: "",
        startDate: null,
        endDate: null,
    });

    async function handleCreatePlan(tempWorkItems: ITempPlanWorkItem[]) {
        // VALIDATE
        if (!planEstimate.startDate) {
            setAlert({
                message: "Vui lòng chọn Ngày bắt đầu của Kế hoạch",
                severity: "warning"
            });
            return;
        }

        if (!planEstimate.endDate) {
            setAlert({
                message: "Vui lòng chọn Ngày kết thúc của Kế hoạch",
                severity: "warning"
            });
            return;
        }

        if (!planEstimate.approver) {
            setAlert({
                message: "Vui lòng chọn Người phê duyệt kế hoạch",
                severity: "warning"
            });
            return;
        }

        const filteredWorkItems = tempWorkItems.filter(wi => wi.isSelected);

        let workItems;
        try {
            workItems = filteredWorkItems.map(wi => {
                if (!wi.supervisor) {
                    throw new Error("Cần nhập Người giám sát cho hạng mục số" + wi.orderIndex);
                }

                const filteredTask = wi.tasks.filter(t => t.isSelected);
                const tasks = filteredTask.map(t => {
                    if (!t.startDate) {
                        const message = `Cần nhập Ngày bắt đầu của Hạng mục ${wi.orderIndex} Task ${t.orderIndex}`
                        console.log(message)
                        throw new Error(message);
                    }

                    if (!t.endDate) {
                        const message = `Cần nhập Ngày kết thúc của Hạng mục ${wi.orderIndex} Task ${t.orderIndex}`
                        console.log(message)
                        throw new Error(message);
                    }

                    if (!costEstimateId) {
                        const message = "Bạn chưa truyền vào costEstimateId trong Task"
                        console.log(message)
                        throw new Error(message);
                    }

                    return {
                        taskId: t.taskId,
                        startdate: dayjs(t.startDate).format('DD-MM-YYYY').toString(),
                        enddate: dayjs(t.endDate).format('DD-MM-YYYY').toString(),

                        amountOfWork: t.amountOfWork,
                        quantityUnitId: t.quantityUnitId, // HOW CAN WE GET THIS???

                        orderIndex: t.orderIndex,
                        costEstimateId: costEstimateId,

                        // products: t.products.map(p => ({
                        //     productId: p.product.productid, // WRONG???
                        //     quantityUnit: p.product.mdQuantityUnit.quantityunitid, // HOW CAN WE GET THIS???
                        //     consumptionAmount: p.quantity, // WHAT THE HELL IS THIS ???
                        // })),
                        // labors: t.labors.map(l => ({
                        //     laborID: l.employeeid
                        // }))
                        products: [
                            {
                                productId: 1,
                                quantityUnit: 1,
                                consumptionAmount: 1
                            }
                        ],
                        labors: [
                            {
                                laborID: 1,
                            }
                        ]
                    };
                });

                return {
                    orderIndex: wi.orderIndex,
                    workItemId: wi.workItemId,
                    employeeId: wi.supervisor.employeeid,
                    tasks
                };
            });
        }
        catch (ex) {
            console.log(ex);
            if (ex instanceof Error) {
                setAlert({
                    message: ex.message + "",
                    severity: "warning"
                });
                console.info("ex instanceof Error")
            }
            else {
                setAlert({
                    message: "Xảy ra lỗi",
                    severity: "warning"
                });
            }

            return;
        }

        const startdate = planEstimate.startDate.format('DD-MM-YYYY').toString();
        const enddate = planEstimate.endDate.format('DD-MM-YYYY').toString();

        const formBodyData: ICreatePlan = {
            planname: planEstimate.planName,
            startdate,
            enddate,

            mdConstructionSite: 2, // DO WE REALLY NEED TO PASS A CONSTRUCTION SITE ID???
            mdEmployee: 1, // Creator

            approvers: [planEstimate.approver.employeeid],
            listPlanWorkItem: workItems,
            // listPlanWorkItem: [],
        };

        console.log(formBodyData);
        try {
            await planAPI.create(formBodyData);
        }
        catch (ex) {
            setAlert({
                message: "Lỗi khi Call API Kế hoạch",
                severity: "warning"
            })
        }
        finally {

        }
    }

    return (
        <main className="flex flex-col gap-10 p-5 bg-[#ced6e0]">
            {/* Upper Section */}
            <PlanOverviewInfoLayout onLoadCostEstimate={
                (costEstimateId) => {
                    setCostEstimateId(costEstimateId);

                    // Reset planEstimate when changing CostEstimate
                    setPlanEstimate({
                        planName: "",
                        startDate: null,
                        endDate: null,
                        approver: undefined,
                    })
                }
            }>
                <PlanEstimate
                    key={costEstimateId}
                    planEstimate={planEstimate}
                    onChangePlanEstimate={setPlanEstimate}
                />
            </PlanOverviewInfoLayout>

            {/* Show Cost Estimate WorkItems & Tasks */}
            {
                (costEstimateId != undefined) && (
                    <PlanWorkItemLayout
                        onClickChangeView={(newState: "list" | "gantt") => {
                            setViewState(newState);
                        }}
                    >
                        {viewState == "list" ? (
                            <PlanWorkItemSection
                                key={costEstimateId}
                                costEstimateId={costEstimateId}
                                handleCreatePlan={handleCreatePlan}
                            />
                        ) : (
                                <div className="w-full min-h-full">
                                    
                            </div>
                        )}
                    </PlanWorkItemLayout>
                )
            }
        </main>
    )
}