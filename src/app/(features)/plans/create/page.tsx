'use client';
import { Navigation } from "@/configs/sidebarNavigation";
import CreatePlan from "@/features/plan/create-rework/CreatePlan";
import PageContainer from "@/layouts/PageContainer";

export default function Page() {
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
				{
					text: "Tạo mới"
				}
			]}
		>
			<CreatePlan />
		</PageContainer>
	);
}