'use client';
import Logo from "@/components/logo/Logo";
import { Avatar, Drawer, IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; 
import NavGroup from "./NavGroup";
import { Navigation, constructionNavList, userNavList } from "@/configs/sidebarNavigation";
import { useEffect, useState } from "react";

export const drawerWidth = 260;

export default function Sidebar({
    open,
    activeNav,
    handleDrawerClose,
    setActiveNav,
}: {
    open: boolean;
    activeNav: Navigation;
    setActiveNav: (nav: Navigation) => void;
    handleDrawerClose: () => void;
}) {
    const [fullName, setFullName] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        if (localStorage) {
            const name = localStorage.getItem("fullName");
            name && setFullName(name);

            const r = localStorage.getItem("role");
            r && setRole(r);
        }
    }, []);
    
    return (
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <aside className='h-full flex flex-col gap-2 bg-content '>
                <header className='h-16 px-3 flex justify-between items-center'>
                    <Logo />
                    <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                    </IconButton>
                </header>
                <section className='h-16 px-3 flex'>
                    <div className="w-full h-full px-5 flex items-center gap-5 bg-apple-gray-6 rounded-md hover:bg-apple-gray-5 cursor-pointer">
                        <Avatar>{fullName?.[0]}</Avatar>
                        <p className="flex flex-col">
                            {fullName}
                            <span className="text-xs font-bold text-apple-gray">{role}</span>
                        </p>
                    </div>
                </section>
                <NavGroup
                    title="Công trình"
                    activeNav={activeNav}
                    navList={constructionNavList}
                    onChangeActiveNav={setActiveNav}
                />
                <NavGroup
                    title="Người dùng"
                    activeNav={activeNav}
                    navList={userNavList}
                    onChangeActiveNav={setActiveNav}
                />
            </aside>
      </Drawer>
    )
}