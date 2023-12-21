'use client';
import CreatePlan from "@/features/plan/create-rework/CreatePlan";
import MainContainer from "@/layouts/MainContainer";
import PageContainer from "@/layouts/PageContainer";

export default function Page() {
  return (
    <PageContainer
      breadcrumbs={[
        {
					text: "Trang chủ",
					href: "/home"
				},
				{
          text: "Kế hoạch",
          href: "../plans"
        },
        {
          text: "Tạo mới",
				},
      ]}
    >
      <MainContainer>
        <CreatePlan />
      </MainContainer>
    </PageContainer>
  );
}