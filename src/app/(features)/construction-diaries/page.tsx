"use client";
import { CustomTabPanel } from "@/components/TabPanel";
import ListDiaryCurrent from "@/components/diary/list/ListDiaryCurrent";
import ListDiaryDenyApprove from "@/components/diary/list/ListDiaryDenyApprove";
import ListDiaryDenyConfirm from "@/components/diary/list/ListDiaryDenyConfirm";
import ListDiaryWaitingApprove from "@/components/diary/list/ListDiaryWaitingApprove";
import ListDiaryWaitingConfirm from "@/components/diary/list/ListDiaryWaitingConfirm";
import MainContentContainer from "@/layouts/MainContentContainer";
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
					text: "Nhật ký công trình",
				}
			]}
		>
			<MainContentContainer fixedHeight={true}>
				<Tabs
					value={tabValue}
					onChange={handleChangeTab}
					aria-label="recruitment tabs"
				>
					<Tab label="Gần đây" />
					<Tab label="Chờ đối chứng" />
					<Tab label="Chờ duyệt" />
					<Tab label="Từ chối đối chứng" />
					<Tab label="Từ chối duyệt" />
				</Tabs>

				<CustomTabPanel value={tabValue} index={0}>
					<ListDiaryCurrent />
				</CustomTabPanel>
				<CustomTabPanel value={tabValue} index={1}>
					<ListDiaryWaitingConfirm />
				</CustomTabPanel>
				<CustomTabPanel value={tabValue} index={2}>
					<ListDiaryWaitingApprove />
				</CustomTabPanel>
				<CustomTabPanel value={tabValue} index={3}>
					<ListDiaryDenyConfirm />
				</CustomTabPanel>
				<CustomTabPanel value={tabValue} index={4}>
					<ListDiaryDenyApprove />
				</CustomTabPanel>
			</MainContentContainer>
		</PageContainer>
	)
}