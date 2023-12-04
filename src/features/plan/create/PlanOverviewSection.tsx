import IconButton from "@/components/IconButton";
import ConstructionSiteDetail, {
  ICSDetailProps,
} from "@/components/plan/ConstructionSiteDetail";
import CostEstimateDetail, {
  ICEDetailProps,
} from "@/components/plan/CostEstimateDetail";
import PopupAddSupervisor from "@/components/plan/PopupAddSupervisor";
import useModal from "@/hooks/useModal";
import { listLabors } from "./WorkItem";
import { DatePicker } from "@mui/x-date-pickers";
import { SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { getDuration } from "@/utils/functions/getDuration";

export default function PlanOverviewSection({
  csInfo,
  ceInfo,
  approverCode,
  handleChangeApprover,
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
  children,
}: {
  csInfo: ICSDetailProps | null;
  ceInfo: ICEDetailProps | null;
  
  approverCode: string | null;
  handleChangeApprover: (employeeCode: string | null) => void;
  
  startDate: Dayjs | null;
  handleChangeStartDate: (value: Dayjs | null) => void;
  
  endDate: Dayjs | null;
  handleChangeEndDate: (value: Dayjs | null) => void;

  children?: React.ReactNode;
}) {
  const { setModal, setIsOpenModal } = useModal();
 
  const approver = listLabors.find((ee) => ee.id == approverCode);
  const approverInfo = approver
    ? approver.firstName + " " + approver.lastName  + " " +  approver.id
    : "Chưa chọn người duyệt kế hoạch";

  const planDuration = (startDate != null && endDate != null) ?
    getDuration(startDate.toDate(), endDate.toDate()) :
    0;
  
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
          (csInfo && ceInfo)
          &&
          <section className="flex gap-5">
          <div className="w-2/3 p-5 grid grid-cols-2 bg-content border rounded-md">
            <ConstructionSiteDetail csInfo={csInfo} />
            <CostEstimateDetail ceInfo={ceInfo} />
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
              minDate={startDate ?? undefined}
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
                        selectedSupervisorCode={approverCode}
                        onChangeSupervisor={(eeCode: string | null) => {

                          handleChangeApprover(eeCode);
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
