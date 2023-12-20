import DetailDiary from "@/features/diary/detail/DetailDiary";
import PageContainer from "@/layouts/PageContainer";

export default function Page({
    params: {
        id
    }
}: {
    params: {
        id: number;
    }
}) {
    return (
        <PageContainer
            breadcrumbs={[
                {
                    text: "Trang chủ",
                    href: "/home"
                },
                {
                    text: "Nhật ký công trình",
                    href: "/construction-diaries"
                },
                {
                    text: "Chi tiết nhật ký",
                }
            ]}
        >
            <DetailDiary value={id} />
        </PageContainer>
    )
}