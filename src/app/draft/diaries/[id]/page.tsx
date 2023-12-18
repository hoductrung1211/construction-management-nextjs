"use client";

export default function Page({
    params: {
        id
    }
}: {
    params: {
        id: number;
    }
}) {
    return (
        <div>
            {id}
        </div>
    )
}