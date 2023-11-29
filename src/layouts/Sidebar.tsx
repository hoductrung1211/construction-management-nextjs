'use client';
import Logo from "@/components/logo/Logo";
import { Avatar, Drawer, IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; 
import NavGroup from "./NavGroup";
import { Navigation, constructionNavList, userNavList } from "@/configs/sidebarNavigation";

export const drawerWidth = 260;

export default function Sidebar({
    open,
    handleDrawerClose,
    activeNav
}: {
    open: boolean;
    handleDrawerClose: () => void;
    activeNav: Navigation
}) {
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
            <aside className='h-full flex flex-col gap-2'>
                <header className='h-16 px-3 flex justify-between items-center'>
                    <Logo />
                    <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                    </IconButton>
                </header>
                <section className='h-16 px-3 flex'>
                    <div className="w-full h-full px-5 flex items-center gap-5 bg-apple-gray-6 rounded-md hover:bg-apple-gray-5 cursor-pointer">
                        <Avatar>T</Avatar>
                        <p className="flex flex-col">
                            Ho Duc Trung
                            <span className="text-xs font-bold text-apple-gray">Project Manager</span>
                        </p>
                    </div>
                </section>
                <NavGroup
                    title="Construction"
                    activeNav={activeNav}
                    navList={constructionNavList}
                />
                <NavGroup
                    title="User"
                    activeNav={activeNav}
                    navList={userNavList}
                />
            </aside>
      </Drawer>
    )
}