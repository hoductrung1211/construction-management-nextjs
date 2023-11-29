'use client';
import Sidebar, { GenerateNav } from "@/layouts/legacy/Sidebar";

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex">
            {children}
        </div>
    )
}