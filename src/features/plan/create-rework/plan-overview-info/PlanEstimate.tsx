import IconButton from "@/components/IconButton";
import PopupAddSupervisor from "@/components/plan/create/PopupAddSupervisor";
import useModal from "@/hooks/useModal";
import { IEmployee } from "@/models/Employee";
import { getDuration } from "@/utils/functions/getDuration";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

export interface IPlanEstimate {
	planName: string;
	startDate: Dayjs | null;
	endDate: Dayjs | null;
	approver?: IEmployee;
}

export interface IPlanEstimateProps {
	planEstimate: IPlanEstimate;
	onChangePlanEstimate: (newValue: IPlanEstimate) => void;
}

export default function PlanEstimate({
	planEstimate,
	onChangePlanEstimate,
}: IPlanEstimateProps) {
	const {
		setIsOpenModal,
		setModal
	} = useModal();

	const {
		startDate,
		endDate,
		approver,
	} = planEstimate;

	const planDuration =
		startDate != null && endDate != null
			? getDuration(startDate.toDate(), endDate.toDate())
			: 0;

	const approverInfo = approver ?
		"#" + approver?.employeeid + " " + approver?.firstname + " " + approver?.lastname :
		"Chưa chọn người duyệt kế hoạch";

	return (
		<section className="w-1/3 p-5 flex flex-col gap-5 bg-content border rounded-md">
			<TextField
				label="Tên kế hoạch"
				value={planEstimate.planName}
				onChange={e => onChangePlanEstimate({
					...planEstimate,
					planName: e.target.value
				})}
			/>

			<div className="grid grid-cols-2 gap-4">
				<DatePicker
					label="Ngày dự kiến bắt đầu"
					format="DD-MM-YYYY"
					value={startDate}
					minDate={dayjs()}
					maxDate={endDate ?? undefined}
					onChange={newVal => onChangePlanEstimate({
						...planEstimate,
						startDate: newVal
					})}
				/>

				<DatePicker
					label="Ngày dự kiến kết thúc"
					format="DD-MM-YYYY"
					value={endDate}
					minDate={startDate ?? dayjs().add(1, "week")}
					onChange={newVal => onChangePlanEstimate({
						...planEstimate,
						endDate: newVal
					})}
				/>

			</div>
			<p className="text-end">Kéo dài: {planDuration} ngày</p>

			<div className="flex gap-2 items-center ">
				<p className="flex gap-2">
					<span className="font-bold">Người phê duyệt: </span>
					{approverInfo}
				</p>

				<IconButton
					className="ml-auto "
					name="user-plus"
					tooltip="Thêm người duyệt kế hoạch"
					onClick={() => {
						setModal({
							children: (
								<PopupAddSupervisor
									selectedSupervisorId={approver?.employeeid}
									onChangeSupervisor={(approver?: IEmployee) => {
										onChangePlanEstimate({
											...planEstimate,
											approver
										})
										setIsOpenModal(false);
									}}
								/>
							),
						});
					}}
				/>
			</div>
		</section>
	)
}