"use client";
import Icon from "@/components/Icon"; 
import { INavigation, Navigation } from "@/configs/sidebarNavigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavGroup({
	activeNav,
	title,
	navList = [],
	onChangeActiveNav
}: {
	activeNav: Navigation;
	title?: string;
	navList?: INavigation[];
	onChangeActiveNav: (nav: Navigation) => void;
}) {
	const [authorNav, setAuthorNav] = useState(navList);
	const primaryColor = "text-white bg-primary";

	useEffect(() => {
		// const role = getRole();
		// if (role) {
		// 	const newAuthorNav = authorNav.filter(nav => !nav.role || nav.role.includes(role));
		// 	setAuthorNav(newAuthorNav);
		// }
	}, []);

	return (
		<nav className="mt-3 flex flex-col px-3 gap-2">
			<legend className="text-sm mb-1">{title}</legend>
			{
				authorNav.map(nav => (
					<Link
						key={nav.id}
						className={(nav.id == activeNav ? primaryColor : " text-slate-600 hover:bg-apple-gray-6 ") + " h-12 px-3 flex items-center gap-3 text-sm font-semibold rounded-md "}
						href={nav.href}
						onClick={() => onChangeActiveNav(nav.id)}
					>
						<Icon className="w-8 grid place-items-center" name={nav.icon} size="xl" />
						{nav.text}
					</Link>
				))
			}
		</nav>
	)
}