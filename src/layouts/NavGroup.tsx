import Icon from "@/components/Icon";
import { Navigation } from "@/configs/sidebarNavigation";
import Link from "next/link";

export interface INavProps {
    id: number;
    icon: string;
    text: string;
    href: string;
}

export default function NavGroup({
    activeNav,
    title,
    navList = []
}: {
    activeNav: Navigation;
    title?: string,
    navList?: INavProps[]
}) {
    const primaryColor = "text-white bg-primary";    
    
    return (
        <nav className="mt-3 flex flex-col px-3 gap-2">
            <legend className="text-sm mb-1">{title}</legend>
            {
                navList.map(nav => (
                    <Link
                        key={nav.id}
                        className={(nav.id == activeNav ? primaryColor : " text-slate-600 hover:bg-apple-gray-6 ") + " h-12 px-3 flex items-center gap-3 text-sm font-semibold rounded-md "}
                        href={nav.href}
                    >
                        <Icon className="w-8 grid place-items-center" name={nav.icon} size="xl" />
                        {nav.text}
                    </Link>
                ))
            }
        </nav>
    )
}