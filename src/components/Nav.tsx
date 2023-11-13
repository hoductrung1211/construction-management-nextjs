import { useState } from "react";
import Icon from "./Icon";
import { useRouter } from "next/navigation";
import useActiveNav from "../hooks/useActiveNav";

const navBaseClass = " py-1 rounded-md text-start font-semibold text-opacity-90 hover:text-opacity-100 text-dark-light hover:bg-slate-200 "

export function NavGroup({
    text,
    children
}: {
    text?: string,
    children?: React.ReactNode
}) {
    const [isShow, setIsShow] = useState(true);
    const [isMouseOver, setIsMouseOver] = useState(false);

    return (
        <section className={"flex flex-col rounded-md gap-2 transition px-2" + (isMouseOver ? " bg-slate-200" : "")}>
            {
                text &&
                <button
                    className={"w-fit px-2 -ml-2" + navBaseClass}
                        onClick={() => setIsShow(!isShow)}
                        onMouseOver={() => setIsMouseOver(true)}
                        onMouseOut={() => setIsMouseOver(false)}
                >
                    {text}
                </button>
            }
            <div className="flex flex-col gap-1">
            {isShow && children}
            </div>
        </section>
    )
}

export default function Nav({
    id,
    icon,
    onClick,
    href,
    children
}: {
    id: number,
    icon?: string,
    href?: string,
    onClick?: () => void
    children?: React.ReactNode
}) {
    const [activeNavId, setActiveNavId] = useActiveNav();
    const router = useRouter();

    function handleClick() {
        setActiveNavId(id);
        if (href) router.push(href);
        onClick?.();
    }
    
    return (
        <button
            className={navBaseClass + "h-10 px-3 flex items-center gap-3 " + (activeNavId == id ? " text-opacity-100  bg-slate-200 " : "")}
            onClick={handleClick}
        >
            {
                icon && <Icon name={icon} size="lg" />
            }
            {children}
        </button>
    )
}