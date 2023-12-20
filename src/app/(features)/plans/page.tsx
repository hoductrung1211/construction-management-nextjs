'use client';

import { Navigation } from "@/configs/sidebarNavigation";
import PageContainer from "@/layouts/PageContainer";

export default function Page() {
    return (
        <PageContainer
            activeNav={Navigation.Plans}
            breadcrumbs={[
                {
                    text: "Trang chủ",
                    href: "/home"
                },
                {
                    text: "Kế hoạch",
                },
            ]}
        >
            
        </PageContainer>
    )
}