"use client";
import IconButton from "@/components/IconButton";

interface IPlanTableToolbar {

}

export default function PlanTableToolbar({

}: IPlanTableToolbar) {

	return (
		<section className="h-20 px-3 flex justify-between items-center">
			<div className="">
				
			</div>

			<IconButton
				name="plus"
				onClick={() => { }}
				tooltip="Tạo kế hoạch"
			/>
		</section>
	)
}