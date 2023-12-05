'use client';
import Modal from "@mui/material/Modal";
import { SetStateAction, createContext, useContext, useState } from "react";

const ModalContext = createContext<{
    setModal: ({ children, isCloseOnClickBackdrop }: {
        children: React.ReactNode;
        isCloseOnClickBackdrop?: boolean | undefined;
    }) => void,
    setIsOpenModal: React.Dispatch<SetStateAction<boolean>>
}>({
    setModal: () => { },
    setIsOpenModal: () => {}
});

export default function useModal() {
    return useContext(ModalContext);
}

export function ModalProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isCloseOnClickBackdrop, setIsCloseOnClickBackdrop] = useState(true);
    const [modalChildren, setModalChildren] = useState<React.ReactNode>(<></>)
    const handleClose = () => {
        isCloseOnClickBackdrop ? setIsOpenModal(false) : null;
    };

    const setModal = ({
        children,
        isCloseOnClickBackdrop
    }: {
        children: React.ReactNode,
        isCloseOnClickBackdrop?: boolean
    }) => {
        setModalChildren(children);
        setIsOpenModal(true);
        setIsCloseOnClickBackdrop(isCloseOnClickBackdrop ?? true);
    }

    return (
        <ModalContext.Provider value={{
            setModal,
            setIsOpenModal
        }}>
            {children}
            <Modal
                open={isOpenModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                children={
                    <ModalContainer>
                        {modalChildren}
                    </ModalContainer>
                }
            /> 
        </ModalContext.Provider>
    )
}

function ModalContainer({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {children}
        </div>
    )
}