import Icon from "./Icon";
import { IconButtonProps, IconButton as MuiIconButton } from "@mui/material";

export interface IIconButtonProps extends IconButtonProps {
    name: string;
    size?: 'small';
    bgColor?: boolean;
}

export default function IconButton({
    name,
    size,
    bgColor = false,
    ...props
}: IIconButtonProps) {
    return (
        <MuiIconButton className={"rounded-md " + (bgColor ? "bg-apple-gray-6 " : "")} size={size ?? "small"} {...props}>
            <Icon className="w-8 h-8 grid place-items-center" name={name ?? ""} />
        </MuiIconButton>
    )
}