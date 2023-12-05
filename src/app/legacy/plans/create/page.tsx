'use client';
import { Navigation } from "@/configs/sidebarNavigation";
import PageContainer from "@/layouts/PageContainer";
import Create from "@/legacy/plan/Create";

export default function Home() { 
  return (
    <PageContainer
      activeNav={Navigation.ConstructionSites}
      breadcrumbs={[
        {
          text: "Home",
          href:""
        },
        {
          text: "Create",
        }
      ]}
    >
      <Create />
    </PageContainer>
  )
}
