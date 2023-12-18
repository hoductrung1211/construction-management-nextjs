'use client';
import OperatingPlanTable from "@/features/plan/list/OperatingPlanTable/OperatingPlanTable";
import { Navigation } from "@/configs/sidebarNavigation";
import PageContainer from "@/layouts/PageContainer";
import MainContainer from "@/components/MainContainter";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { CustomTabPanel } from "@/components/TabPanel";

export default function Page() {
    const [tab, setTab] = useState(0);

    function handleTabChange(event: React.SyntheticEvent, newValue: number) {
        setTab(newValue);
    }

    return (
        <PageContainer
            activeNav={Navigation.Plans}
            breadcrumbs={[
                {
                    text: "Trang chủ",
                    href: "./"
                },
                {
                    text: "Kế hoạch"
                },
            ]}
        >
            <MainContainer fixedHeight={true}>
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                >
                    <Tab label="Đang vận hành" />
                    <Tab label="Chờ xác nhận" />
                    <Tab label="Khác" />
                </Tabs>

                <CustomTabPanel value={tab} index={0}>
                    <OperatingPlanTable />
                </CustomTabPanel>
                <CustomTabPanel value={tab} index={1}>

                </CustomTabPanel>
                <CustomTabPanel value={tab} index={2}>
                    
                </CustomTabPanel>
            </MainContainer>
        </PageContainer>
    )
}