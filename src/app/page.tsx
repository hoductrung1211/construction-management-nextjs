import PopupSelect from "@/components/plan/PopupSelect";
import { Navigation } from "@/configs/sidebarNavigation";
import PageContainer from "@/layouts/PageContainer";

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
      <PopupSelect/>
    </PageContainer>
  )
}
