'use client';
import { Navigation } from "@/configs/sidebarNavigation";
import CreatePlan from "@/features/plan/create/CreatePlan";
import PageContainer from "@/layouts/PageContainer";

export default function Home() { 
  return (
    <PageContainer
      activeNav={Navigation.ConstructionSites}
      breadcrumbs={[
        {
          text: "Trang chủ",
          href:""
        },
        {
          text: "Công trình",
          href:""
        },
        {
          text: "Tạo kế hoạch",
          href:""
        }
      ]}
    >
      <CreatePlan />

    </PageContainer>
  )
}
