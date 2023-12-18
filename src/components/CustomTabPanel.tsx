export interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function CustomTabPanel({
    children,
    value,
    index,
    ...others
}: ITabPanelProps) {
    return (
        <div
            role="tabpanel"
            hidden={value != index}
            {...others}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    )
}