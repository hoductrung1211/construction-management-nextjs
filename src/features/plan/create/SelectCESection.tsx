import { contructionSiteList } from "@/models/ConstructionSite";
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
  handleChangeCS: (event: SelectChangeEvent) => void;
  handleChangeCE: (event: SelectChangeEvent) => void;
  handleLoadPlanInfo: () => void;
}

export default function SelectCESection({
  selectedCS,
  selectedCE,
  handleChangeCS,
  handleChangeCE,
  handleLoadPlanInfo,
}: SelectCESectionProps) {
  const costEstimateList =
    contructionSiteList.find((cs) => cs.constructionCode == selectedCS)
      ?.costEstimateList ?? [];

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
          onChange={handleChangeCS}
        >
          {contructionSiteList.map((cs, idx) => (
            <MenuItem key={idx} value={cs.constructionCode}>
              {cs.constructionCode} + {cs.constructionName}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          Lưu ý: Danh sách công trình có dự toán đã duyệt
        </FormHelperText>
      </FormControl>
      <FormControl className="w-[300px]" size="small">
        <InputLabel id="label-costestimate-plan">
          Chọn dự toán
        </InputLabel>
        <Select
          labelId="label-costestimate-plan"
          label="Chọn dự toán"
          value={selectedCE}
          onChange={handleChangeCE}
        >
          {costEstimateList.map((ce) => (
            <MenuItem key={ce.costEstimateCode} value={ce.costEstimateCode}>
              {ce.costEstimateCode}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          Lưu ý: Danh sách dự toán của công trình đã được duyệt
        </FormHelperText>
      </FormControl>
      <Button variant="outlined" onClick={handleLoadPlanInfo}>
        Load
      </Button>
    </section>
  );
}
