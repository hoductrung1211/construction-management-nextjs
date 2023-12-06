'use client';
import { Navigation } from "@/configs/sidebarNavigation";
import CreateDiary from "@/features/diary/create/CreateDiary";
import FilterPlan from "@/components/FilterPlan_Diary";
import ListPlanTab from "@/features/plan/list/ListPlanTab";
import CreatePlan from "@/features/plan/create/CreatePlan";
import PageContainer from "@/layouts/PageContainer";
import ListDiaryTab from "@/features/diary/list/ListDiaryTab";

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
      <CreateDiary/>

    </PageContainer>
  )
}
