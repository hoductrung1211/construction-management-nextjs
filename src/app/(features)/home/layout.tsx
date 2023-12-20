'use client';
import { Navigation } from "@/configs/sidebarNavigation";
import { useSidebar } from "@/layouts/LayoutContainer";
import { useEffect } from "react";

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    const { setActiveNav } = useSidebar();

    useEffect(() => {
        setActiveNav(Navigation.Home);
    }, []);

    return (
        <>
            {children}
        </>
    )
}