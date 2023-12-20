import { Navigation } from "@/configs/sidebarNavigation";
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
                    text: "Công trình",
                },
            ]}
        >
            
        </PageContainer>
    )
}