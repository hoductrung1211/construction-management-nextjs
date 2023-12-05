"use client";

import useModal from "@/hooks/useModal";
import { Button } from "@mui/material";
import { useEffect } from "react";

export default function Page() {
    const {
        setIsOpenModal,
        setModal
    } = useModal();

    useEffect(() => {
        setModal({
            children: <div>hehe</div>,
            isCloseOnClickBackdrop: true,
        });
    }, []);

    return (
        <main className="w-screen h-screen grid place-items-center">
            <Button onClick={e => setIsOpenModal(true)}>
                Click me
            </Button>
        </main>
    )
}