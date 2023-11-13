'use client';
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

const ActiveNavContext = createContext<[number, Dispatch<SetStateAction<number>>]>([-1, () => {}]);

export default function useActiveNav() {
    return useContext(ActiveNavContext);
}

export function ActiveNavContainer({
    children
}: {
    children: React.ReactNode
}) {
    const [activeNavId, setActiveNavId] = useState(-1);
    
    return (
        <ActiveNavContext.Provider value={[activeNavId, setActiveNavId]}>
            {children}
        </ActiveNavContext.Provider>
    )
}