import Logo from "@/components/logo/Logo";
import Nav, { NavGroup } from "../../components/Nav";
import { INavigation } from "../../configs/sidebarNavigation";

export default function Sidebar({
    children
}: {
    children?: React.ReactNode
    }) {
    return (
        <aside className="flex-shrink-0 w-72 h-screen flex flex-col border-r border-dashed">
            <div className="p-4 flex flex-col gap-4">
                <Logo />
            </div>
            <nav className="grow px-2 pb-6 flex flex-col gap-4 overflow-y-auto text-sm font-semibold">
                <div className="">
                </div>
                {children}
            </nav>
        </aside>
    )
}

export function GenerateNav({
    node,
}: {
    node: INavigation | INavigation[],
}) {
    if (Array.isArray(node)) {
        return (
            <>
                {node.map(subNode => <GenerateNav key={subNode.text} node={subNode} />)}
            </>
        );
    }

    if (node.children != undefined)
        return (
            <NavGroup text={node.text}>
                <GenerateNav node={node.children} />
            </NavGroup>
        );
    
    return (
        <Nav
            id={node.id ?? -1}
            icon={node.icon}
            href={node.href}
            onClick={node.onClick}
        >
            {node.text}
        </Nav>
    )
}