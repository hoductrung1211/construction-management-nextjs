'use client';
import PlanOverviewSection from "./PlanOverviewSection";
import WorkItemSection from "./WorkItemSection";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import SelectCESection from "./SelectCESection";
import { Dayjs } from "dayjs";
import useAlert from "@/hooks/useAlert";

export default function CreatePlan({

}) {
    const [selectedCS, setSelectedCS] = useState("");
    const [selectedCE, setSelectedCE] = useState("");

    const [CSInfo, setCSInfo] = useState<ICSInfo | null>(null);
    const [CEInfo, setCEInfo] = useState<ICEInfo | null>(null);

    const [approverCode, setApproverCode] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);

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
                csInfo={CSInfo}
                ceInfo={CEInfo}
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
                <WorkItemSection
                
                />
            }
        </main>
    )
}

interface ICSInfo {
    csId: string,
    csName: string,
    address: string,
    brand: string,
    creator: string,
    createdTime: Date,
    endDate: Date,
    startDate: Date,
}

const initCSInfo = {
    csId:"",
    csName:"",
    address:"",
    brand:"",
    creator:"",
    createdTime: new Date(2024, 11, 20),
    endDate: new Date(2024, 11, 20),
    startDate: new Date(2024, 11, 20),
}

interface ICEInfo {
    ceId: string,
    ceName: string,
    createdTime: Date,
    creator: string,
    totalWorkItems: number,
    totalCost: number,
}

const initCEInfo = {
    ceId: "",
    ceName: "",
    createdTime: new Date(2024, 11, 20),
    creator: "",
    totalWorkItems: 10,
    totalCost: 1000000000,
}