import LayoutContainer from "@/layouts/LayoutContainer";

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    )
}