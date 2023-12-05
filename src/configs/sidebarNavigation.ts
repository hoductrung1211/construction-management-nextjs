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
        text: "Công trình",
        href: "/construction-sites"
    },
    {
        id: Navigation.CostEstimates,
        icon: "calculator",
        text: "Dự toán",
        href: "/cost-estimates"
    },
    {
        id: Navigation.Plans,
        icon: "chart-gantt",
        text: "Kế hoạch",
        href: "/plans"
    },
    {
        id: Navigation.Diaries,
        icon: "clipboard",
        text: "Nhật ký công trình",
        href: "/diaries"
    },
];

export const userNavList: INavProps[] = [
    {
        id: Navigation.UserProfile,
        icon: "user",
        text: "Hồ sơ cá nhân",
        href: "/profile"
    },
    {
        id: Navigation.Settings,
        icon: "gear",
        text: "Cài đặt",
        href: "/settings"
    },
    {
        id: Navigation.Logout,
        icon: "right-from-bracket",
        text: "Đăng xuất",
        href: "/"
    },
]