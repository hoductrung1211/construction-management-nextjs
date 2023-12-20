export default function MainContainer({
    children,
    fixedHeight = false
}: {
    children?: React.ReactNode,
    fixedHeight?: boolean
}) {
    return (
        <main className={"px-4 flex flex-col bg-neutral-100 " + (fixedHeight ? "h-full " : "min-h-full")}>
            {children}
        </main>
    )
}