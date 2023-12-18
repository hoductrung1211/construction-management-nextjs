import { Navigation } from "@/configs/sidebarNavigation";
import ApproveDiary from "@/features/diary/approve/ApproveDiary";
import ConfirmDiary from "@/features/diary/confirm/ConfirmDiary"
import PageContainer from "@/layouts/PageContainer";

export default function Page({
    params:{
        id
    }
}: {
    params: {
        id:number;
    }
}) {
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
            <ApproveDiary value= {id}/>
        </PageContainer>
    )
}