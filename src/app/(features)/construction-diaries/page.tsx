import { Navigation } from "@/configs/sidebarNavigation";
import ListDiaryTab from "@/features/diary/list/ListDiaryTab";
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
            <ListDiaryTab/>
        </PageContainer>
    )
}