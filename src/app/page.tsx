'use client';
import { Navigation } from "@/configs/sidebarNavigation";
import CreateDiary from "@/features/diary/create/CreateDiary";
import FilterPlan from "@/components/FilterPlan_Diary";
import ListPlanTab from "@/features/plan/list/ListPlanTab";
import CreatePlan from "@/features/plan/create/CreatePlan";
import PageContainer from "@/layouts/PageContainer";
import ListDiaryTab from "@/features/diary/list/ListDiaryTab";
import DetailPlan from "@/features/plan/detail/DetailPlan";
import ApprovedView from "@/features/plan/approved/ApprovedView";
import DetailDiary from "@/features/diary/detail/DetailDiary";
import ApproveDiary from "@/features/diary/approve/ApproveDiary";
import ConfirmDiary from "@/features/diary/confirm/ConfirmDiary";

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
      {/* <CreateDiary/> */}
      {/* <CreatePlan /> */}
      {/* <DetailPlan/> */}
      {/* <ApprovedView/> */}
      {/* <DetailDiary/> */}
      {/* <ListPlanTab/> */}
      {/* <ApproveDiary/> */}
      <ConfirmDiary/>
    </PageContainer>
  )
}
