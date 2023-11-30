'use client';
import Icon from "@/components/Icon";
import { Modal } from "@mui/material";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext<(prop: boolean, icon?: string) => void>(() => { });

export default function useLoadingAnimation() {
    return useContext(LoadingContext);
}

export const LoadingAnimationProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [isShowLoading, setIsShowLoading] = useState(false);
    const [icon, setIcon] = useState("fan");

    const setLoading = (isShow: boolean, icon?: string) => {
        setIsShowLoading(isShow);
        icon ? setIcon(icon) : null;
    }
    
    return (
        <LoadingContext.Provider value={setLoading}>
        {children}
        <Modal
            open={isShowLoading}
            children={<Progressing icon={icon} />} />
        </LoadingContext.Provider>
    )
}

function Progressing({
    icon = "fan"
}: {
    icon?: string
}) {
    return (
        <span className="h-80 animate-bounce absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white">
            <div className="animate-spin h-fit w-fit" >
                <Icon name={icon} size="2xl" />
            </div>
        </span>
    )
}