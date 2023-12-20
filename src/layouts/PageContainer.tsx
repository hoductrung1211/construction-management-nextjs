'use client';
import HeadBar from '@/layouts/HeadBar';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { drawerWidth } from '@/layouts/Sidebar';
import { useSidebar } from './LayoutContainer';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
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
    breadcrumbs,
    children,
}: {
    breadcrumbs?: {
        text: string;
        href?: string;
    }[];
    children?: React.ReactNode;
}) {
    const {
        open,
        handleDrawerOpen
    } = useSidebar();
    const lastBreadcrumb = breadcrumbs?.[breadcrumbs.length - 1];

    return (
        <>
            <HeadBar open={open} handleDrawerOpen={handleDrawerOpen}>
                {breadcrumbs?.slice(0, breadcrumbs.length - 1).map(breadcrumb => (
                    <Link key={breadcrumb.text} href={breadcrumb.href ?? ""}>{breadcrumb.text}</Link>))
                }
                {lastBreadcrumb &&
                    <Typography color="text.primary">
                        {lastBreadcrumb.text}
                    </Typography>
                }
            </HeadBar>
            <Main className='min-h-screen p-0 flex flex-col text-dark' open={open}>
                <div className='flex-shrink-0 h-16'></div>
                {children}
            </Main>
        </>
    )
}