import Icon from "@/components/Icon";
import Task from "./PlanTask";
import { Checkbox } from "@mui/material";
import { ChangeEvent, useState } from "react";
import IconButton from "@/components/IconButton";
import useModal from "@/hooks/useModal";
import PopupAddSupervisor from "@/components/plan/create/PopupAddSupervisor";
import { ICreatePlanWorkItem } from "@/models/WorkItem";
import { ICreatePlanTask } from "@/models/Task";
import { IEmployee, listLabors } from "@/models/Employee";

export default function PlanWorkItem({
	workItem,
	onWorkItemChange,
}: {
	workItem: ICreatePlanWorkItem;
	onWorkItemChange: (newWI: ICreatePlanWorkItem) => void;
}) {
	const {
		isSelected,
		orderIndex,
		supervisor,
		tasks,
		workItemCode,
		workItemName,
	} = workItem;

	const selectedSupervisor = listLabors.find((ee) => ee.employeeid == supervisor?.employeeid);

	const [isShow, setIsShow] = useState(true);
	const { setModal, setIsOpenModal } = useModal();

	function handleChangeIsSelected(e: ChangeEvent<HTMLInputElement>) {
		const checked = e.target.checked;

		if (!checked) {
			setIsShow(false);
		}

		onWorkItemChange({
			...workItem,
			isSelected: checked,
		});
	}

	function handleChangeIsShow() {
		if (isSelected) setIsShow(!isShow);
	}

	function handleChangeTask(newTask: ICreatePlanTask) {
		const idx = tasks.findIndex((t) => t.taskCode == newTask.taskCode);
		console.log(newTask);

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
					onClick={handleChangeIsShow}
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
										selectedSupervisorId={supervisor?.employeeid + ""}
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
				tasks.map((task, idx) => (
					<Task
						key={task.taskCode}
						task={task}
						orderIndex={idx + 1}
						onChangeTask={handleChangeTask}
					/>
				))}
		</section>
	);
}


