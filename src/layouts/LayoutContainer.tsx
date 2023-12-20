'use client';
import { Navigation } from '@/configs/sidebarNavigation';
import Sidebar  from '@/layouts/Sidebar';
import { createContext, useContext, useState } from 'react';

export const SidebarContext = createContext({
    open: true,
    handleDrawerOpen: () => { },
    setActiveNav: (nav: Navigation) => {}
});

export function useSidebar() {
    return useContext(SidebarContext);
}

export default function LayoutContainer({
    children,
}: {
    children?: React.ReactNode
}) {
    const [open, setOpen] = useState(true);
    const [activeNav, setActiveNav] = useState(Navigation.Home);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className='flex'>
            <Sidebar
                open={open}
                handleDrawerClose={handleDrawerClose}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
            />
            <SidebarContext.Provider value={{ open, handleDrawerOpen, setActiveNav }}>
                {children}
            </SidebarContext.Provider>
        </div>
    );
}