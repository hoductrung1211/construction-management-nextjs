export default function FieldValue({
    label,
    align = 'center',
    children
}: {
    label?: string;
    align?: 'between' | 'center'
    children?: React.ReactNode
}) {
    if (align == 'between')
        return (
            <p className="flex justify-between items-center">
                <span className="font-semibold">
                    {label}
                </span>
                {children}
            </p>
        )
    
    return (
        <p className="flex gap-5 items-center">
            <span className="w-52 text-end font-semibold">
                {label}
            </span>
            {children}
        </p>
    )
}