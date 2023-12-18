"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    function handleDoubleClick(id: number) {
        router.push("/"+ id);
    }

    return (
        <div className="flex flex-col gap-4">
            <div
                className="h-20 bg-gray-200 hover:bg-gray-100"
                onDoubleClick={() => handleDoubleClick(1)}
            ></div>
            <div className="h-20 bg-gray-200 hover:bg-gray-100"></div>
            <div className="h-20 bg-gray-200 hover:bg-gray-100"></div>
        </div>
    )
}