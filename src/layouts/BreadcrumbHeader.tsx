import { Breadcrumbs } from "@mui/material"

export default function BreadcrumbHeader({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <header className="flex-shrink-0 h-16 px-5 pb-4 flex items-end bg-gray-50 border-b ">
            <Breadcrumbs aria-label="breadcrumb">
            {children}
            </Breadcrumbs>
        </header>
    )
}