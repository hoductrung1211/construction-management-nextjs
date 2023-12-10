"use client";
import { IEmployee } from "@/models/Employee";
import { Dayjs } from "dayjs";
import { useState } from "react";
import PlanOverviewInfoLayout from "./plan-overview-info/PlanOverviewInfoLayout";
import PlanWorkItemLayout from "./plan-work-item/PlanWorkItemLayout";
import PlanEstimate from "./plan-overview-info/PlanEstimate";
import PlanWorkItemSection from "./plan-work-item/PlanWorkItemSection";

export default function CreatePlan() {
    // 1. Lifted state up 
    // (loaded by "Plan Overview Layout", used by "Plan Work Item Layout" to load initial CostEstimate WorkItems)
    const [costEstimateId, setCostEstimateId] = useState<number>();

    // 2. Also lifted state up 
    // (loaded by "Plan Overview Layout", used by "Plan Work Item Layout" to create a Plan)
    const [planEstimate, setPlanEstimate] = useState<{
        planName: string;
        startDate: Dayjs | null;
        endDate: Dayjs | null;
        approver?: IEmployee;
    }>({
        planName: "",
        startDate: null,
        endDate: null,
    });

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
                    <PlanWorkItemLayout>
                        <PlanWorkItemSection
                            planEstimate={planEstimate}
                            costEstimateId={costEstimateId}
                        />
                    </PlanWorkItemLayout>
                )
            }
        </main>
    )
}