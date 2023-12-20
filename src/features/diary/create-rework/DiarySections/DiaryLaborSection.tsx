"use client";
import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import { useState } from "react";

export default function DiaryLaborSection({

}) {
	const [isShow, setIsShow] = useState(true);

	return (
		<section className="">
			<header className="sticky top-16 h-14 px-2 flex gap-6 items-center justify-start text-apple-gray bg-apple-gray-6 z-10 overflow-hidden">
				<Icon
					className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
					name={isShow ? "angle-down" : "angle-right"}
					onClick={() => setIsShow(!isShow)}
				/>  
				<div className="w-80 flex gap-3">
					<p className="w-28 text-dark font-semibold">Nhân công</p>
					<span className="text-apple-gray">0</span>
				</div>
				<section className="flex items-center gap-2 ml-auto">
					 
				</section>
			</header>
			 
		</section>
	)
}