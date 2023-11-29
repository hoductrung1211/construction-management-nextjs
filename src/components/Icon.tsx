interface IIconProps {
    name: string;
    size?: 'lg' | 'xl' | '2xl' | '3xl' | '';
    className?: string;
}

export default function Icon({
    name,
    size = '',
    className
}: IIconProps) {
    return (
        <span className={className}>
            <i className={`fa-solid fa-${name} fa-${size}`}></i>
        </span>
    )
}