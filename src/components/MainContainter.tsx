interface IMainContainer {
    children?: React.ReactNode;
    fixedHeight?: boolean;
}

export default function MainContainer({
    children,
    fixedHeight,
}: IMainContainer) {
    let className = "px-4 flex flex-col bg-neutral-100 ";
    fixedHeight ?
        className += "h-full " :
        className += "min-h-full ";

    return (
        <main className={className}>
        {children} 
        </main>
    )
}