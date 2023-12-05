import { Navigation } from "@/configs/sidebarNavigation";
import CreateDiary from "@/features/diary/CreateDiary";
import PageContainer from "@/layouts/PageContainer";

export default function Page() {
    return (
        <PageContainer
            activeNav={Navigation.CostEstimates}
            breadcrumbs={[
                {
                    text: "Home",
                    href: ""
                },
                {
                    text: "Construction Diaries",
                    href: "/cost-estimates"
                },
                {
                    text: "Create",
                    href: "/cost-estimates/create"
                }
            ]}
        >
            <CreateDiary />
        </PageContainer>
    )
}