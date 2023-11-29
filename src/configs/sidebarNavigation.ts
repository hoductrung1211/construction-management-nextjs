import { INavProps } from "@/layouts/NavGroup";

export const enum Navigation {
    ConstructionSites,
    CostEstimates,
    Plans,
    Diaries,
    UserProfile,
    Settings,
    Logout
}

export const constructionNavList : INavProps[] = [
    {
        id: Navigation.ConstructionSites,
        icon: "helmet-safety",
        text: "Construction Sites",
        href: "/construction-sites"
    },
    {
        id: Navigation.CostEstimates,
        icon: "calculator",
        text: "Cost Estimates",
        href: "/cost-estimates"
    },
    {
        id: Navigation.Plans,
        icon: "chart-gantt",
        text: "Plans",
        href: "/plans"
    },
    {
        id: Navigation.Diaries,
        icon: "clipboard",
        text: "Construction Diaries",
        href: "/diaries"
    },
];

export const userNavList: INavProps[] = [
    {
        id: Navigation.UserProfile,
        icon: "user",
        text: "User Profile",
        href: "/profile"
    },
    {
        id: Navigation.Settings,
        icon: "gear",
        text: "Settings",
        href: "/settings"
    },
    {
        id: Navigation.Logout,
        icon: "right-from-bracket",
        text: "Log out",
        href: "/"
    },
]