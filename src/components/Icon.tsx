
interface IIconProps {
    id?: string,
    name: string,
    size?: 'lg' | 'xl' | '2xl' | '3xl' | ''
}

export default function Icon({
    id,
    name,
    size = ''
}: IIconProps) {
    return (
        <span className="">
            <i id={id} className={`fa-solid fa-${name} fa-${size}`}></i>
        </span>
    )
}