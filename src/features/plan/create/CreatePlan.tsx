'use client';
import PlanOverviewSection from "./PlanOverviewSection";
import WorkItemSection from "./WorkItemSection";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import SelectCESection from "./SelectCESection";

export default function CreatePlan({

}) {
    const [selectedCS, setSelectedCS] = useState("");
    const [selectedCE, setSelectedCE] = useState("");

    const handleCSChange = (event: SelectChangeEvent) => {
        setSelectedCS(event.target.value);
    };

    const handleCEChange = (event: SelectChangeEvent) => {
        setSelectedCE(event.target.value);
    };

    return (
        <main className="flex flex-col gap-10 p-5 bg-[#ced6e0]">
            <PlanOverviewSection
                csInfo={{
                    csId:"",
                    csName:"",
                    address:"",
                    brand:"",
                    creator:"",
                    createdTime: new Date(2024, 11, 20),
                    endDate: new Date(2024, 11, 20),
                    startDate: new Date(2024, 11, 20),
                }}
                ceInfo={{
                    ceId: "",
                    ceName: "",
                    createdTime: new Date(2024, 11, 20),
                    creator: "",
                    totalWorkItems: 10,
                    totalCost: 1000000000,
                }}
            >
                <SelectCESection
                    selectedCS={selectedCS}
                    selectedCE={selectedCE}
                    handleCSChange={handleCSChange}
                    handleCEChange={handleCEChange}
                />
            </PlanOverviewSection>

            <WorkItemSection
            
            />
        </main>
    )
}