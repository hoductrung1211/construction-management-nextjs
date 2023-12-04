'use client';

import { CustomTabPanel } from "@/components/TabPanel";
import RecruitmentRequestTable from "@/components/table-check/RecruitmentRequestTable";
import RecruitmentTable from "@/components/table/RecruitmentTable";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default function Page() {
    const [tabValue, setTabValue] = useState<0 | 1>(0);
    
    function handleChangeTab(event: React.SyntheticEvent, newValue:0 | 1) {
        setTabValue(newValue);
    }

    return (
        <div className="h-screen w-full p-5 bg-white">
            
        </div>
    )
}