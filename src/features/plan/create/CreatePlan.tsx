'use client';
import PlanOverviewSection from "./PlanOverviewSection";
import PlanWorkItemSection from "./PlanWorkItemSection";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import SelectCESection from "./SelectCESection";
import { Dayjs } from "dayjs";
import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import { IContructionSite, initCSInfo } from "@/models/ConstructionSite";
import { ICostEstimate, initCEInfo } from "@/models/CostEstimate";

export default function CreatePlan({

}) {
    const [selectedCS, setSelectedCS] = useState("");
    const [selectedCE, setSelectedCE] = useState("");

    const [CSInfo, setCSInfo] = useState<IContructionSite | null>(null);
    const [CEInfo, setCEInfo] = useState<ICostEstimate | null>(null);

    const [approverCode, setApproverCode] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);

    const setLoadingAnimation = useLoadingAnimation();

    const setAlert = useAlert();

    const handleCSChange = (event: SelectChangeEvent) => {
        setSelectedCS(event.target.value);
    };

    const handleCEChange = (event: SelectChangeEvent) => {
        setSelectedCE(event.target.value);
    };

    return (
        <main className="flex flex-col gap-10 p-5 bg-[#ced6e0]">
            <PlanOverviewSection
                constructionSite={CSInfo}
                costEstimate={CEInfo}
                approverCode={approverCode}
                handleChangeApprover={(newApproverCode) => { 
                    setApproverCode(newApproverCode);
                }}
                
                startDate={startDate}
                handleChangeStartDate={(value: Dayjs | null) => {
                    setStartDate(value);
                }}
                
                endDate={endDate}
                handleChangeEndDate={(value: Dayjs | null) => {
                    setEndDate(value);
                }}
            >
                <SelectCESection
                    selectedCS={selectedCS}
                    selectedCE={selectedCE}
                    handleChangeCS={handleCSChange}
                    handleChangeCE={handleCEChange}
                    handleLoadPlanInfo={() => {
                        if (selectedCE && selectedCS) {
                            setLoadingAnimation(true);
                            setTimeout(() => {
                                setLoadingAnimation(false);
                            }, 1200);

                            setCSInfo(initCSInfo)
                            setCEInfo(initCEInfo)
                        }
                        else {
                            setAlert({
                                message: "Vui lòng chọn đầy đủ các trường thông tin",
                                severity: "error"
                            })
                        }
                    }}
                />
            </PlanOverviewSection>
            {
                (CEInfo && CSInfo) &&
                <PlanWorkItemSection
                
                />
            }
        </main>
    )
}
