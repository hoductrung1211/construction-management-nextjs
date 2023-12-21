import PlanDetail from "@/features/plan/detail/PlanDetail"
import MainContainer from "@/layouts/MainContainer"
import PageContainer from "@/layouts/PageContainer"

export default function Page({
    params: { id }
}: {
    params: { id: number }
}) {
    return (
        <PageContainer
            breadcrumbs={[
                {
                    text: "Trang chủ",
                    href: "/home"
                },
                {
                    text: "Kế hoạch",
                    href: "../plans",
                },
                {
                    text: "Chi tiết Kế hoạch",
                },
            ]}
        >
            <MainContainer>
                <PlanDetail planId={id} />
            </MainContainer>
        </PageContainer>
    )
}