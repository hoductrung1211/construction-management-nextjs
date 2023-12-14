"use client";
import FilterPlan_Diary from "@/components/diary/FilterPlan_Diary";
import SearchConstructionSite from "@/components/diary/test";
import { Navigation } from "@/configs/sidebarNavigation";
import CreateDiary from "@/features/diary/create/CreateDiary";
import ListDiaryTab from "@/features/diary/list/ListDiaryTab";
import PageContainer from "@/layouts/PageContainer";

export default function Home() {
  return (
    <PageContainer
      activeNav={Navigation.ConstructionSites}
      breadcrumbs={[
        {
          text: "Trang chủ",
          href: "",
        },
        {
          text: "Công trình",
          href: "",
        },
        {
          text: "Tạo kế hoạch",
          href: "",
        },
      ]}
    >
      <CreateDiary/>
    </PageContainer>
  );
}
