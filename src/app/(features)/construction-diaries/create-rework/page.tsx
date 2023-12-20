import CreateDiary from "@/features/diary/create-rework/CreateDiary";
import MainContainer from "@/layouts/MainContainer";
import PageContainer from "@/layouts/PageContainer";

export default function Page() {
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
                    text: "Tạo mới",
                }
            ]}
        >
            <MainContainer>
                <CreateDiary />
            </MainContainer>
        </PageContainer>
    )
}