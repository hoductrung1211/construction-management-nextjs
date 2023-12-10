import constructionSiteAPI from "@/apis/constructionSite";
import costEstimateAPI from "@/apis/costEstimate";
import IConstructionSite from "@/models/ConstructionSite";
import ICostEstimate from "@/models/CostEstimate";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";

export interface SelectCESectionProps {
  selectedCSId: string;
  selectedCE: string;
  onChangeCS: (constructionSiteId: string) => void;
  onChangeCE: (costEstimateId: string) => void;
  handleLoadPlanInfo: () => void;
}

export default function SelectCESection({
  selectedCSId,
  selectedCE,
  onChangeCS,
  onChangeCE,
  handleLoadPlanInfo,
}: SelectCESectionProps) {
  const [contructionSiteList, setConstructionSiteList] = useState<IConstructionSite[]>([]);
  const [costEstimateList, setCostEstimateList] = useState<ICostEstimate[]>([]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    const csListRes = await constructionSiteAPI.getListActive();
    setConstructionSiteList(csListRes);
  };

  const handleChangeCS = async (event: SelectChangeEvent) => {
    const csId = event.target.value;
    const ceList = await costEstimateAPI.getListCodeAndName(csId);

    onChangeCS(csId);
    setCostEstimateList(ceList);
  }

  const handleChangeCE = async (event: SelectChangeEvent) => {
    const ceId = event.target.value;
    onChangeCE(ceId);
  }

  return (
    <section className="flex gap-10">
      <FormControl className="w-[300px]" size="small">
        <InputLabel id="label-construction-site-plan">
          Chọn công trình
        </InputLabel>
        <Select
          labelId="label-construction-site-plan"
          label="Chọn công trình"
          value={selectedCSId + ""}
          onChange={handleChangeCS}
        >
          {contructionSiteList.map((cs, idx) => (
            <MenuItem key={cs.constructionsiteid} value={cs.constructionsiteid}>
              {cs.constructionsitecode} + {cs.constructionsitename}
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
          disabled={!selectedCSId}
          labelId="label-costestimate-plan"
          label="Chọn dự toán"
          value={selectedCE}
          onChange={handleChangeCE}
        >
          {costEstimateList.map((ce) => (
            <MenuItem key={ce.costestimateid} value={ce.costestimateid}>
              {ce.costestimatename}
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
