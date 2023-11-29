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
            {/* <div className="w-full h-full flex flex-col rounded-xl overflow-hidden">
                <header className="flex-shrink-0 h-14 flex items-center gap-4 border-b border-apple-gray-5">
                    <Tabs
                        value={tabValue}
                        onChange={handleChangeTab}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Operating" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
                        <Tab label="Waiting to review" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
                    </Tabs>
                </header>
                <main className=" drop-shadow-sm bg-default ">
                    <CustomTabPanel value={tabValue} index={0}>
                        <RecruitmentTable />
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={1}>
                        <RecruitmentRequestTable />
                    </CustomTabPanel>
                </main>
            </div> */}
        </div>
    )
}