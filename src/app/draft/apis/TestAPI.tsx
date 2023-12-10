"use client";
import axios from "@/apis/axios.config";
import { useEffect, useState } from "react"

export default function TestAPI() {
    const [data, setData] = useState<any[] | object>([]);

    useEffect(() => {
        callApi();
    }, []);

    async function callApi() {
        const {data} = await axios.get("costestimatetask/getlistbycostestimateid/1");
        setData(data);
        console.log(data);
    }

    return (
        <main className="w-screen h-screen flex flex-col gap-10">
            {data.toString()}
        </main>
    )
}