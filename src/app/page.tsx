import PopupAddSupervisor from "@/components/plan/PopupAddSupervisor";
import PopupSelect from "@/components/plan/PopupSelect";
import { Navigation } from "@/configs/sidebarNavigation";
import CreateDiary from "@/features/diary/CreateDiary";
import Login from "@/features/login/Login";
import Create from "@/features/plan/Create";
import ListPlan from "@/features/plan/ListPlan";
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
