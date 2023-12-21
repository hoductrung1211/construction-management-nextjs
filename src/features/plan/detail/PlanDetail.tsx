"use client";

import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import IPlan from "@/models/Plan";
import { useEffect, useState } from "react";
import PlanOverviewSection from "./PlanOverviewSection";
import IPlanWorkItem from "@/models/PlanWorkItem";
import PlanWorkItemSection from "./PlanWorkItemSection";

interface IPlanDetailProps {
    planId: number;
}

export default function PlanDetail({
    planId
}: IPlanDetailProps) {
    // SUP
    const setAlert = useAlert();
    const setLoading = useLoadingAnimation();

    // Data
    const [planOverview, setPlanOverview] = useState<IPlan>();
    const [planWorkItems, setPlanWorkItems] = useState<IPlanWorkItem[]>([]);

    useEffect(() => {
        fetchPlan();
    }, []);

    async function fetchPlan() {
        setLoading(true);
        try {
            // Call API plan overview + workitems
            // Set to states
        }
        catch (ex) {
            setAlert({
                message: "Xảy ra lỗi trong quá trình load Kế hoạch! Vui lòng thử lại.",
                severity: "error"
            });
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="pt-5 flex flex-col gap-10">
            <PlanOverviewSection 

            />

            <PlanWorkItemSection
            
            />
        </div>
    )
}