'use client';
import PlanOverviewSection from "./PlanOverviewSection";
import PlanWorkItemSection from "./PlanWorkItemSection";
import { useState } from "react";
import SelectCESection from "./SelectCESection";
import { Dayjs } from "dayjs";
import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import IConstructionSite from "@/models/ConstructionSite";
import ICostEstimate from "@/models/CostEstimate"; 
import constructionSiteAPI from "@/apis/constructionSite";
import costEstimateAPI from "@/apis/costEstimate";
import { IEmployee } from "@/models/Employee";

export default function CreatePlan({

}) {
    const setLoadingAnimation = useLoadingAnimation();
    const setAlert = useAlert();
    const [selectedCSId, setSelectedCSId] = useState("");
    const [selectedCEId, setSelectedCEId] = useState("");

    const [CSInfo, setCSInfo] = useState<IConstructionSite>();
    const [CEInfo, setCEInfo] = useState<ICostEstimate>();

    const [approver, setApprover] = useState<IEmployee | undefined>(undefined);
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);

    const handleCSChange = (constructionSiteId: string) => {
        setSelectedCSId(constructionSiteId);
    };

    const handleCEChange = (costEstimateId: string) => {
        setSelectedCEId(costEstimateId);
    };

    const handleLoadCSInfo = async () => {
        if (selectedCEId && selectedCSId) {

            if (selectedCEId == CEInfo?.costestimateid + "")
                return;

            setLoadingAnimation(true);

            try {
                const constructionSite = (await constructionSiteAPI.getListActive()).find(cs => cs.constructionsiteid + "" == selectedCSId);
                setCSInfo(constructionSite);

                // 1. Get Info Cost Estimate
                const costEstiamte = await costEstimateAPI.getById(Number.parseInt(selectedCEId));
                setCEInfo(costEstiamte);
                setStartDate(null);
                setEndDate(null);

                // 2. Call API Cost Estimate Tasks
                // const data = await 
            }
            catch (ex) {

            }
            finally {
                setLoadingAnimation(false);
            }
        }
        else {
            setAlert({
                message: "Vui lòng chọn đầy đủ các trường thông tin",
                severity: "error"
            });
        }
    }

    return (
        <main className="flex flex-col gap-10 p-5 bg-[#ced6e0]">
            <PlanOverviewSection
                constructionSite={CSInfo}
                costEstimate={CEInfo}
                approver={approver}
                handleChangeApprover={(newApproverId) => { 
                    setApprover(newApproverId);
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
                    selectedCSId={selectedCSId}
                    selectedCE={selectedCEId}
                    onChangeCS={handleCSChange}
                    onChangeCE={handleCEChange}
                    handleLoadPlanInfo={handleLoadCSInfo}
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
