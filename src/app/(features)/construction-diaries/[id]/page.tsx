import { Navigation } from "@/configs/sidebarNavigation";
import DetailDiary from "@/features/diary/detail/DetailDiary";
import ListDiaryTab from "@/features/diary/list/ListDiaryTab";
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
            <DetailDiary value= {id}/>
        </PageContainer>
    )
}