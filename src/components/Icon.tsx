import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    id?: string;
    name?: string;
    size?: 'lg' | 'xl' | '2xl' | '3xl' | '';
}

export default function Icon({
    name,
    size = '',
    ...props
}: IIconProps) {
    return (
        <span {...props}>
            <i className={`fa-solid fa-${name} fa-${size}`}></i>
        </span>
    )
}