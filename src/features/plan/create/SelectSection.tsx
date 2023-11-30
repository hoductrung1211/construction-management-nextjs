import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export interface SelectCESectionProps {
  selectedCS: string;
  selectedCE: string;
  handleCSChange: (event: SelectChangeEvent) => void;
  handleCEChange: (event: SelectChangeEvent) => void;
}

export default function SelectCESection({
  selectedCS,
  selectedCE,
  handleCSChange,
  handleCEChange,
}: SelectCESectionProps) {
  return (
    <section className="flex gap-10">
      <FormControl className="w-[300px]" size="small">
        <InputLabel id="label-construction-site-plan">
          Chọn công trình
        </InputLabel>
        <Select
          labelId="label-construction-site-plan"
          label="Chọn công trình"
          value={selectedCS}
          onChange={handleCSChange}
        >
          {listcSites.map((item, idx) => (
            <MenuItem key={idx} value={item.id}>
              {item.id} + {item.cSiteName}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          Lưu ý: Danh sách công trình có dự toán đã duyệt
        </FormHelperText>
      </FormControl>
      <FormControl className="w-[300px]" size="small">
        <InputLabel id="label-costestimate-plan">Chọn dự toán</InputLabel>
        <Select
          labelId="label-costestimate-plan"
          label="Chọn dự toán"
          value={selectedCE}
          onChange={handleCEChange}
        >
          <MenuItem value="1">DT-2312</MenuItem>
          <MenuItem value="2">DT-3452</MenuItem>
          <MenuItem value="3">DT3456</MenuItem>
        </Select>
        <FormHelperText>
          Lưu ý: Danh sách dự toán của công trình đã được duyệt
        </FormHelperText>
      </FormControl>
      <Button variant="outlined">Load</Button>
    </section>
  );
}

const listcSites = [
  {
    id: "#BHX0001",
    cSiteName: "Bách Hóa Xanh Lã Xuân Oai",
    lscEstiamte: [
      {
        id: "#CE0001",
        cEName: "DT Bách Hóa Xanh 22/10/2023",
      },
      {
        id: "#CE0002",
        cEName: "DT Bách Hóa Xanh 23/10/2023",
      },
    ],
  },
  {
    id: "#TGDD0001",
    cSiteName: "Thế Giới Di Động Lê Văn Việt",
    lscEstiamte: [
      {
        id: "#CE0003",
        cEName: "DT Thế Giới Di Động 25/10/2023",
      },
      {
        id: "#CE0004",
        cEName: "DT Thế Giới Di Động 26/10/2023",
      },
    ],
  },
  {
    id: "#DMX0001",
    cSiteName: "Điện Máy Xanh Phú Hữu",
    lscEstiamte: [
      {
        id: "#CE0005",
        cEName: "DT Điện Máy Xanh 02/11/2023",
      },
      {
        id: "#CE0006",
        cEName: "DT Điện Máy Xanh 03/11/2023",
      },
    ],
  },
  {
    id: "#AVK0001",
    cSiteName: "AVAKids Lê Văn Việt",
    lscEstiamte: [
      {
        id: "#CE0007",
        cEName: "DT AVAKids 06/11/2023",
      },
      {
        id: "#CE0008",
        cEName: "DT AVAKids 07/11/2023",
      },
    ],
  },
];
