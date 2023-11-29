'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Sidebar, { drawerWidth } from '@/layouts/Sidebar';
import { Navigation } from '@/configs/sidebarNavigation';
import HeadBar from '@/layouts/HeadBar';
import Link from 'next/link';
import { Typography } from '@mui/material';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));

export default function PageContainer({
    activeNav = Navigation.ConstructionSites,
    breadcrumbs,
    children,
}: {
    activeNav?: Navigation,
    breadcrumbs?: {
        text: string;
        href?: string;
    }[]
    children?: React.ReactNode
}) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const lastBreadcrumb = breadcrumbs?.[breadcrumbs.length - 1];

    return (
        <div className='flex'>
        <Sidebar
            open={open}
            activeNav={activeNav}
            handleDrawerClose={handleDrawerClose}
        />
        
        <HeadBar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
        >
            {
                breadcrumbs?.slice(0, breadcrumbs.length - 1).map(breadcrumb => (
                    <Link href={breadcrumb.href ?? ""}>{breadcrumb.text}</Link>
                ))
            }
            {
                lastBreadcrumb &&
                <Typography color="text.primary">
                    {lastBreadcrumb.text}
                </Typography>
            }
        </HeadBar>

        <Main className='p-0 text-dark' open={open}>
            <div className='h-16'></div>
            {children}
        </Main>
        </div>
    );
}