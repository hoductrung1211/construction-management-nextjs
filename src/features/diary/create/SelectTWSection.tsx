import constructionSiteAPI from "@/apis/constructionSite";
import planTaskAPI from "@/apis/plantask";
import IConstructionSite from "@/models/ConstructionSite";
import IPlanTaskDiary from "@/models/PlanTaskDiary";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export interface SelectCESectionProps {
  selectedCS: string;
  selectedTaskWI: string;
  onChangeCS: (constructionSiteId: string) => void;
  // onChangetaskWI: (event: SelectChangeEvent) => void;
  // handleLoadAmountOfPlan: () => void;
}

export default function SelectTWSection({
  selectedCS,
  selectedTaskWI,
  onChangeCS,
}: // onChangetaskWI,
// handleLoadAmountOfPlan,
SelectCESectionProps) {
  const lsTaskWorkitem =
    contructionSiteList.find((cs) => cs.id == selectedCS)?.lstaskWI ?? [];
  const [constructions, setConstructions] = React.useState<IConstructionSite[]>(
    []
  );
  const [selectedConstruction, setSelectedConstruction] =
    React.useState<String>("");
  const [workitemTask, setWorkitemTask] = React.useState<IPlanTaskDiary[]>();
  async function getConstructions() {
    const api: IConstructionSite[] = await constructionSiteAPI.getListActive();
    setConstructions(api);
  }
  const handleConstruction = async (event: SelectChangeEvent) => {
    // setSelectedConstruction(event.target.value);
    // const api: IPlanTaskDiary[] = await planTaskAPI.getList(event.target.value);
    // setWorkitemTask(api);
    //Quynh
    const csId = event.target.value;
    const wkList = await planTaskAPI.getList(csId);

    onChangeCS(csId);
  };
  React.useEffect(() => {
    getConstructions();
  }, []);
  console.log(workitemTask);
  return (
    <section className="grid grid-cols-3 mx-8 mb-5 gap-20">
      <FormControl size="small">
        <InputLabel id="label-construction-site-plan">
          Chọn công trình
        </InputLabel>
        <Select
          className="w-72"
          labelId="label-construction-site-plan"
          label="Chọn công trình"
          value={selectedCS}
          onChange={handleConstruction}
        >
          {constructions.map((item, idx) => (
            <MenuItem key={idx} value={item.constructionsiteid}>
              {item.constructionsitecode} + {item.constructionsitename}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel id="label-costestimate-plan">
          Chọn công việc-hạng mục
        </InputLabel>
        <Select
          className="w-72"
          labelId="label-task-workitem"
          label="Chọn công việc-hạng mục"
          value={selectedTaskWI}
          // onChange={onChangetaskWI}
        >
          {/* {workitemTask?.map((tk, idx) => (
            <MenuItem key={idx} value={tk.plantaskid}>
              {tk.mdWorkItem.workitemCode +
                " " +
                tk.mdWorkItem.workitemname +
                "/" +
                tk.mdTask.taskcode +
                " " +
                tk.mdTask.taskname}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
        <DatePicker
          label="Nhật ký ngày"
          slotProps={{ textField: { className: "w-72", size: "small" } }}
        />
      </LocalizationProvider>
    </section>
  );
}

const contructionSiteList = [
  {
    id: "#BHX0001",
    cSiteName: "Bách Hóa Xanh Lã Xuân Oai",
    lstaskWI: [
      {
        id: "#T0001",
        cEName: "Đào móng",
      },
      {
        id: "#T0002",
        cEName: "Đổ móng",
      },
    ],
  },
  {
    id: "#TGDD0001",
    cSiteName: "Thế Giới Di Động Lê Văn Việt",
    lstaskWI: [
      {
        id: "#T0003",
        cEName: "Đào móng",
      },
      {
        id: "#T0004",
        cEName: "Đổ móng",
      },
    ],
  },
  {
    id: "#DMX0001",
    cSiteName: "Điện Máy Xanh Phú Hữu",
    lstaskWI: [
      {
        id: "#T0005",
        cEName: "Đào móng",
      },
      {
        id: "#T0006",
        cEName: "Đổ móng",
      },
    ],
  },
  {
    id: "#AVK0001",
    cSiteName: "AVAKids Lê Văn Việt",
    lstaskWI: [
      {
        id: "#T0007",
        cEName: "Đào móng",
      },
      {
        id: "#T0008",
        cEName: "Đổ móng",
      },
    ],
  },
];
