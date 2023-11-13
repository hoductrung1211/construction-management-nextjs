export interface INavigation {
    id?: number,
    text: string,
    icon?: string,
    children?: INavigation[],
    href?: string,
    onClick?: () => void
}

export const managerNavigations: INavigation[] = [
    {
        text: "Construction",
        children: [
            {
                id: 1,
                text: "Construction Sites",
                icon: "screwdriver-wrench",
                // href: "/construction-sites"
            },
            {
                id: 2,
                text: "Plans",
                icon: "calendar-days",
            },
            {
                id: 3,
                text: "Diaries",
                icon: "book",
            }, 
        ]
    }, 
    {
        text: "User",
        children: [
            {
                id: 7,
                text: "Profile",
                icon: "circle-user",
                href: "/profile",
            },
            {
                id: 8,
                text: "Change password",
                icon: "key",
                href: "/change-password",
            },
            {
                id: 9,
                text: "Log out",
                icon: "right-from-bracket",
                href: "/"
            },
        ]
    },
]