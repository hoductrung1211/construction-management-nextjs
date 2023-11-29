import { Breadcrumbs, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { drawerWidth } from "./Sidebar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';  
import React from "react";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

export default function HeadBar({
    open,
    handleDrawerOpen,
    children,
}: {
    open: boolean;
    handleDrawerOpen: () => void;
    children?: React.ReactNode;
}) { 
    return (
        <AppBar
            className='fixed top-0 h-16 px-4 flex flex-row items-center gap-4 bg-white shadow-none text-dark'
            open={open}
        >
            <IconButton
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: 'none' }) }}
            >
            <MenuIcon />
            </IconButton>
            <Breadcrumbs>
            {children}
            </Breadcrumbs>
      </AppBar>
    )
}



