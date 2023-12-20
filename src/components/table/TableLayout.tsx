export default function TableLayout({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <section className="h-full flex flex-col rounded-b-lg overflow-auto bg-default">
        {children}
        </section>
    )
}