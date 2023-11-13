
interface IIconProps {
    name: string,
    size?: 'lg' | 'xl' | '2xl' | '3xl' | ''
}

export default function Icon({
    name,
    size = ''
}: IIconProps) {
    return (
        <span className="">
            <i className={`fa-solid fa-${name} fa-${size}`}></i>
        </span>
    )
}