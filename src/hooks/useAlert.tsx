'use client';

import { Alert, AlertColor, AlertProps, Slide, SlideProps, Snackbar } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext<(props: {
    severity?: AlertColor,
    message?: string,
})  => void>(()  => {});

export default function useAlert() {
    return useContext(AlertContext);
}


type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
    return <Slide {...props} direction="left" />;
}

export function AlertProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [open, setOpen] = useState(false); 
    const [severity, setSeverity] = useState<AlertColor>("info");
    const [message, setMessage] = useState("");

    const handleClick = ({
        severity = "info",
        message = ""
    }: {
        severity?: AlertColor,
        message?: string,
        }) => {
        setSeverity(severity);
        setMessage(message);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
 
    return (
        <AlertContext.Provider value={handleClick}>
        {children}
        <Snackbar
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            TransitionComponent={TransitionLeft}
        >
            <Alert
                className="shadow-sm"
                onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
        </AlertContext.Provider>
    )
}