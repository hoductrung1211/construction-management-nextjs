import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export interface SelectCESectionProps {
  selectedCS: string;
  selectedTaskWI: string;
  handleChangeCS: (event: SelectChangeEvent) => void;
  handleChangetaskWI: (event: SelectChangeEvent) => void;
  // handleLoadAmountOfPlan: () => void;
}

export default function SelectTWSection({
  selectedCS,
  selectedTaskWI,
  handleChangeCS,
  handleChangetaskWI,
  // handleLoadAmountOfPlan,
}: SelectCESectionProps) {
  const lsTaskWorkitem =
    contructionSiteList.find((cs) => cs.id == selectedCS)?.lstaskWI ?? [];
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
          onChange={handleChangeCS}
        >
          {contructionSiteList.map((item, idx) => (
            <MenuItem key={idx} value={item.id}>
              {item.id} + {item.cSiteName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel id="label-costestimate-plan">Chọn công việc-hạng mục</InputLabel>
        <Select
          className="w-72"
          labelId="label-task-workitem"
          label="Chọn công việc-hạng mục"
          value={selectedTaskWI}
          onChange={handleChangetaskWI}
        >
          {
            lsTaskWorkitem.map(tk => (
              <MenuItem key={tk.id} value={tk.id}>{tk.id}</MenuItem>
            ))
          } 
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
        <DatePicker
          label="Ngày xem"
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
