"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Icon from "@/components/Icon";
import costEstimateAPI from "@/apis/costEstimate";
import PlanWorkItem from "./PlanWorkItem";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import useAlert from "@/hooks/useAlert";
import { ITempPlanTask } from "./PlanTask";
import { IEmployee } from "@/models/Employee";

export interface IPlanWorkItemSectionProps {
	costEstimateId: number;
	handleCreatePlan: (workItems: ITempPlanWorkItem[]) => void;
}

export interface ITempPlanWorkItem {
	isSelected: boolean;
	orderIndex: number;
	supervisor?: IEmployee;

	workItemId: number;
	workItemCode: string;
	workItemName: string;

	tasks: ITempPlanTask[];
}

export default function PlanWorkItemSection({
	costEstimateId,
	handleCreatePlan,
}: IPlanWorkItemSectionProps) {
	const setLoading = useLoadingAnimation();
	const setAlert = useAlert();

	const [workItems, setWorkItems] = useState<ITempPlanWorkItem[]>([])

	const selectedWorkItems = workItems.filter(wi => wi.isSelected);
	const totalOfTasks = workItems.reduce((res, currentWI) => {
		return res + currentWI.tasks.length;
	}, 0);
	const totalOfSelectedTasks = selectedWorkItems.reduce((res, currentWI) => {
		return res + currentWI.tasks.filter(t => t.isSelected).length;
	}, 0);

	useEffect(() => {
		fetchWorkItems();
	}, []);

	async function fetchWorkItems() {
		setLoading(true);

		try {
			const workItemRes = await costEstimateAPI.getListCostEstimateTasks(costEstimateId);

			const newWorkItems: ITempPlanWorkItem[] = workItemRes.map((wi, idx) => {
				const tasks: ITempPlanTask[] = wi.taskDTOs.map((t, idx) => ({
					isSelected: true,
					orderIndex: idx + 1,
					taskId: t.taskid,
					
					taskName: t.taskname,
					taskCode: t.taskcode,
					amountOfWork: 10,
					quantityUnitId: t.quantityunitid,
					quantityUnitName: t.quantityunitname,

					startDate: null,
					endDate: null,
					
					labors: [],
					products: [
						
					],

				}))

				const workItem: ITempPlanWorkItem = ({
					isSelected: true,
					orderIndex: idx + 1,

					workItemId: wi.workitemid,
					workItemCode: wi.workitem_code,
					workItemName: wi.workitemname,

					supervisor: undefined,

					tasks: tasks
				});

				return workItem;
			});

			setWorkItems(newWorkItems);
		}
		catch (ex) {
			console.log(ex);
			setAlert({
				message: "Xảy ra lỗi khi lấy dữ liệu danh sách Công việc trong Dự toán",
				severity: "error"
			});
		}
		finally {
			setLoading(false);
		}
	}

	return (
		<section className="flex-grow pb-6 flex flex-col bg-white rounded-md ">
			<header className="h-12 px-10 text-apple-gray bg-white flex gap-10 items-center rounded-t-md">
				<p className="w-60">
					<span className="font-semibold">Số lượng hạng mục</span>
					{' '}{selectedWorkItems.length}/{workItems.length}
				</p>
				<p className="w-60">
					<span className="font-semibold">Số lượng công việc</span>
					{' '}{totalOfSelectedTasks}/{totalOfTasks}
				</p>
			</header>
			{workItems.map((wi, idx) => (
				<PlanWorkItem
					key={wi.workItemId}
					orderIndex={idx + 1}
					workItem={wi}
					onWorkItemChange={(newWorkItem: ITempPlanWorkItem) => {
						const index = workItems.findIndex(wi => wi.workItemId == newWorkItem.workItemId);

						setWorkItems([
							...workItems.slice(0, index),
							newWorkItem,
							...workItems.slice(index + 1),
						]);
					}}
				/>
			))}
			<footer className="h-40 p-3 flex justify-end items-center gap-5">
				<Button
					color="success"
					className="min-w-[100px] bg-success flex justify-center items-center gap-5"
					variant="contained"
					onClick={() => handleCreatePlan(workItems)}
				>
					<Icon name="floppy-disk" size="xl" />
					Lưu
				</Button>
				{/* <Button
                    color="info"
                    className="min-w-[100px] bg-primary flex justify-center items-center gap-5"
                    variant="contained"
                >
                    <Icon name="paper-plane" size="xl" />
                    Gửi
                </Button> */}
			</footer>
		</section>
	)
}