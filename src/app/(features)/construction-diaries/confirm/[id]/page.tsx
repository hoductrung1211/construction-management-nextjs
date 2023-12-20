import ConfirmDiary from "@/features/diary/confirm/ConfirmDiary"
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
                    text: "Xác nhận",
                }
            ]}
        >
            <ConfirmDiary value={id} />
        </PageContainer>
    )
}