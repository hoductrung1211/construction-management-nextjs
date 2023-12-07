import IconButton from "@/components/IconButton";
import PopupAddSupervisor from "@/components/plan/create/PopupAddSupervisor";
import useModal from "@/hooks/useModal";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { getDuration } from "@/utils/functions/getDuration";
import ConstructionSiteDetail from "@/components/plan/create/ConstructionSiteDetail";
import CostEstimateDetail from "@/components/plan/create/CostEstimateDetail";
import ICostEstimate from "@/models/CostEstimate";
import IConstructionSite from "@/models/ConstructionSite";
import { IEmployee } from "@/models/Employee";

export default function PlanOverviewSection({
	constructionSite,
	costEstimate,
	approver,
	handleChangeApprover,
	startDate,
	endDate,
	handleChangeStartDate,
	handleChangeEndDate,
	children,
}: {
	constructionSite: IConstructionSite | undefined;
	costEstimate: ICostEstimate | undefined;

	approver?: IEmployee;
	handleChangeApprover: (newApprover?: IEmployee) => void;

	startDate: Dayjs | null;
	handleChangeStartDate: (value: Dayjs | null) => void;

	endDate: Dayjs | null;
	handleChangeEndDate: (value: Dayjs | null) => void;

	children?: React.ReactNode;
}) {
	const { setModal, setIsOpenModal } = useModal();
	const approverInfo = approver ?
		"#" + approver?.employeeid + " " + approver?.firstname + " " + approver?.lastname :
		"Chưa chọn người duyệt kế hoạch";

	const planDuration =
		startDate != null && endDate != null
			? getDuration(startDate.toDate(), endDate.toDate())
			: 0;

	return (
		<section
			className="flex flex-col gap-4 py-4 rounded-md bg-white"
			id="plan-info-section"
		>
			<h6 className="px-5 flex justify-between items-center font-semibold text-lg ">
				Thông tin kế hoạch
			</h6>
			<div className="px-5 py-2 flex flex-col gap-5">
				{children}
				{
					(constructionSite && costEstimate)
					&&
					<section className="flex gap-5">
						<div className="w-2/3 p-5 grid grid-cols-2 bg-content border rounded-md">
							<ConstructionSiteDetail constructionSite={constructionSite} />
							<CostEstimateDetail costEstimate={costEstimate} />
						</div>
						<section className="w-1/3 p-5 flex flex-col gap-5 bg-content border rounded-md">
							<DatePicker
								label="Ngày bắt đầu"
								format="DD-MM-YYYY"
								value={startDate}
								minDate={dayjs()}
								maxDate={endDate ?? undefined}
								onChange={handleChangeStartDate}
							/>

							<DatePicker
								label="Ngày kết thúc"
								format="DD-MM-YYYY"
								value={endDate}
								minDate={startDate ?? dayjs().add(1, "week")}
								onChange={handleChangeEndDate}
							/>

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
													// selectedSupervisorCode={approverId}
													onChangeSupervisor={(approver?: IEmployee) => {
														handleChangeApprover(approver);
														setIsOpenModal(false);
													}}
												/>
											),
										});
									}}
								/>
							</div>
						</section>
					</section>
				}
			</div>
		</section>
	);
}
