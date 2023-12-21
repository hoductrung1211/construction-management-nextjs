'use client';
import { CustomTabPanel } from "@/components/TabPanel";
import CreatePlan from "@/features/plan/create-rework/CreatePlan";
import OperatingPlanTable from "@/features/plan/list/OperatingPlanTable/OperatingPlanTable";
import MainContainer from "@/layouts/MainContainer";
import PageContainer from "@/layouts/PageContainer";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default function Page() {
	const [tabValue, setTabValue] = useState<number>(0);

	function handleChangeTab(event: React.SyntheticEvent, newValue: number) {
		setTabValue(newValue);
	}

	return (
		<PageContainer
			breadcrumbs={[
				{
					text: "Trang chủ",
					href: "/home"
				},
				{
					text: "Kế hoạch",
				},
			]}
		>
			<MainContainer fixedHeight={true}>
				<Tabs
					value={tabValue}
					onChange={handleChangeTab} 
				>
					<Tab label="Vận hành" />
					<Tab label="Chờ duyệt" />
					<Tab label="Khác" />
				</Tabs>

				<CustomTabPanel value={tabValue} index={0}>
					<OperatingPlanTable />
				</CustomTabPanel>
				 
			</MainContainer>
		</PageContainer>
	)
}