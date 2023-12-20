import ApproveDiary from "@/features/diary/approve/ApproveDiary";
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
                    text: "Thông quá",
                }
            ]}
        >
            <ApproveDiary value= {id}/>
        </PageContainer>
    )
}