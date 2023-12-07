"use client";
import axios from "@/apis/axios.config";
import { useEffect, useState } from "react"

export default function TestAPI() {
    const [data, setData] = useState<any[] | object>([]);

    useEffect(() => {
        callApi();
    }, []);

    async function callApi() {
        const res = await axios.get("employees/search?name");
        setData(res);
    }

    return (
        <main className="w-screen h-screen flex flex-col gap-10">
            {data.toString()}
        </main>
    )
}