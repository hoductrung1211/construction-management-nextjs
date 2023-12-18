export default function CustomTableContainer({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <section className="h-full flex flex-col rounded-b-lg overflow-auto">
        {children}
        </section>
    )
}