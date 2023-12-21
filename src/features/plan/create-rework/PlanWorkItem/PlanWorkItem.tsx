"use client";
import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import PopupAddSupervisor from "@/components/plan/create/PopupAddSupervisor";
import { IEmployee } from "@/models/Employee";
import { Checkbox } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ITempPlanWorkItem } from "./PlanWorkItemSection";
import Task, { ITempPlanTask } from "./PlanTask";
import useModal from "@/hooks/useModal";

export interface IPlanWorkItemProps {
	orderIndex: number,
	workItem: ITempPlanWorkItem;
	onWorkItemChange: (newOne: ITempPlanWorkItem) => void;
}

export default function PlanWorkItem({
	workItem,
	onWorkItemChange,
}: IPlanWorkItemProps) {
	const {
		isSelected,
		orderIndex,
		supervisor,
		tasks,
		workItemCode,
		workItemName,
	} = workItem;
	const { setModal, setIsOpenModal } = useModal();
	const [isShow, setIsShow] = useState(true);

	function handleChangeIsSelected(e: ChangeEvent<HTMLInputElement>) {
		onWorkItemChange({
			...workItem,
			isSelected: e.target.checked
		});

		setIsShow(false);
	}

	function handleChangeTask(newTask: ITempPlanTask) {
		const idx = tasks.findIndex((t) => t.taskCode == newTask.taskCode);

		if (idx >= 0) {
			onWorkItemChange({
				...workItem,
				tasks: [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)],
			});
		}
	}

	return (
		<section className="flex flex-col">
			<header className="sticky top-16 h-14 px-2 flex gap-6 items-center justify-start text-apple-gray bg-apple-gray-6 border-t z-10 overflow-hidden">
				<Icon
					className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
					name={isShow ? "angle-down" : "angle-right"}
					onClick={() => {
						isSelected && setIsShow(!isShow)
					}}
				/>
				<Checkbox
					className=" "
					checked={isSelected}
					onChange={handleChangeIsSelected}
				/>
				<span className="w-6 text-end">{orderIndex}</span>
				<div className="w-80 flex gap-3  ">
					<p className="text-dark font-semibold">{workItemName}</p>
					<span className="text-apple-gray">#{workItemCode}</span>
				</div>
				<section className="flex items-center gap-2 ml-auto">
					<div className="flex gap-3 items-center ">
						{supervisor ? (
							<p className="flex gap-2">
								<span className="font-bold">
									{supervisor.firstname + " " + supervisor.lastname}
								</span>
								{supervisor.employeeid}
							</p>
						) : (
							<span>Chưa chọn người giám sát</span>
						)}
					</div>
					<IconButton
						className=""
						name="user-plus"
						tooltip="Thêm người giám sát"
						onClick={() => {
							setModal({
								children: (
									<PopupAddSupervisor
										selectedSupervisorId={supervisor?.employeeid}
										onChangeSupervisor={(newSupervisor?: IEmployee) => {
											onWorkItemChange({
												...workItem,
												supervisor: newSupervisor,
											});

											setIsOpenModal(false);
										}}
									/>
								),
							});
						}}
					/>
				</section>
			</header>
			{isShow &&
				workItem.tasks.map((task, idx) => (
					<Task
						key={task.taskCode}
						task={task}
						orderIndex={idx + 1}
						onChangeTask={handleChangeTask}
					/>
				))}
		</section>
	)
}