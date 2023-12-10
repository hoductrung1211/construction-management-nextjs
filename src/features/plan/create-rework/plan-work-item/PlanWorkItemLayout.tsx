"use client";

import IconButton from "@/components/IconButton";

export interface IPlanWorkItemLayoutProps {
    children?: React.ReactNode
}

export default function PlanWorkItemLayout({
    children
}: IPlanWorkItemLayoutProps) {
    return (
        <div className="flex gap-5">
            {/* Main character will be here */}
            {children}
            
            {/* Right aside buttons */}
            <aside className="pb-32 flex flex-col gap-4">
                <div className="sticky top-20 flex flex-col gap-4">
                    <IconButton name="bars-progress" tooltip="Hiển thị theo dạng danh sách" bgColor={true} /> 
                    <IconButton name="chart-gantt" tooltip="Hiển thị theo dạng Gantt Chart"  bgColor={true} /> 
                </div>
                <div className="sticky top-[580px] bot-10 flex flex-col gap-4">
                    <IconButton
                        name="angles-up"
                        bgColor={true}
                        tooltip="Cuộn lên đầu trang"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    /> 
                    <IconButton name="arrow-up" bgColor={true} /> 
                    <IconButton name="arrow-down" bgColor={true} /> 
                </div>
            </aside>
        </div>
    )
}