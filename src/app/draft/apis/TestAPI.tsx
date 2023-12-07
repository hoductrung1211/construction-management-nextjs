"use client";
import costEstimateAPI from "@/apis/costEstimate";
import { useEffect } from "react"

export default function TestAPI() {
    useEffect(() => {
        callApi();
    }, []);

    async function callApi() {
        const data = await costEstimateAPI.getListCostEstimateTasks(1);
        console.log(data);
    }

    return (
        <main className="w-screen h-screen flex flex-col gap-10">

        </main>
    )
}