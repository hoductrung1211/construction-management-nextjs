interface IIconProps {
    id?: string | number;
    name: string;
    size?: 'lg' | 'xl' | '2xl' | '3xl' | '';
    className?: string;
}

export default function Icon({
    id,
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