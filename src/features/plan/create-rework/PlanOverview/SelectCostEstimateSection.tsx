"use client";
import constructionSiteAPI from "@/apis/constructionSite";
import costEstimateAPI from "@/apis/costEstimate";
import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import IConstructionSite from "@/models/ConstructionSite";
import ICostEstimate from "@/models/CostEstimate";
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";

export interface ISelectCostEstimateSectionProps {
    selectedCSId?: string;
    selectedCEId?: string;

    onChangeSelectedCS: (newCSId: string) => void;
    onChangeSelectedCE: (newCEId: string) => void;
    onLoadData: () => void;
}

export default function SelectCostEstimateSection({
    selectedCEId,
    selectedCSId,

    onChangeSelectedCE,
    onChangeSelectedCS,
    onLoadData,
}: ISelectCostEstimateSectionProps) {
    const setLoading = useLoadingAnimation();
    const setAlert = useAlert();

    // 1. List data for Select Dropdown CS, CE
    const [constructionSiteList, setConstructionSiteList] = useState<IConstructionSite[]>([]);
    const [costEstimateList, setCostEstimateList] = useState<ICostEstimate[]>([]);

    useEffect(() => {
        fetchConstructionSiteList();
    }, []);

    async function fetchConstructionSiteList() {
        setLoading(true);
        try {
            const CSListResponse = await constructionSiteAPI.getListActive();
            setConstructionSiteList(CSListResponse);
        }
        catch (ex) {
            setAlert({
                message: "Xảy ra lỗi trong quá trình lấy dữ liệu Công trình",
                severity: "error"
            });
        }
        finally {
            setLoading(false);
        }
    }

    async function handleChangeCS(e: SelectChangeEvent) {
        const newCSId = e.target.value;
        onChangeSelectedCS(newCSId);

        setLoading(true);
        try {
            const CEListResponse = await costEstimateAPI.getListCodeAndName(Number.parseInt(newCSId));
            setCostEstimateList(CEListResponse);
        }
        catch (ex) {
            setAlert({
                message: "Xảy ra lỗi trong quá trình lấy dữ liệu Dự toán",
                severity: "error"
            });
        }
        finally {
            setLoading(false);
        }
    }

    function handleChangeCE(e: SelectChangeEvent) {
        const newCEId = e.target.value;
        onChangeSelectedCE(newCEId);
    }

    return (
        <section className="flex gap-10">
            {/* Construction Site  */}
            <FormControl className="w-[300px]" size="small">
                <InputLabel id="label-construction-site-plan">
                    Chọn công trình
                </InputLabel>
                <Select
                    labelId="label-construction-site-plan"
                    label="Chọn công trình"
                    value={selectedCSId}
                    onChange={handleChangeCS}
                >
                    {constructionSiteList.map(cs => (
                        <MenuItem key={cs.constructionsiteid} value={cs.constructionsiteid}>
                            {cs.constructionsitecode} + {cs.constructionsitename}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>
                    Lưu ý: Danh sách công trình có dự toán đã duyệt
                </FormHelperText>
            </FormControl>
            
            {/* Cost Estimate  */}
            <FormControl className="w-[300px]" size="small">
                <InputLabel id="label-costestimate-plan">
                    Chọn dự toán
                </InputLabel>
                <Select
                    disabled={!selectedCSId}
                    labelId="label-costestimate-plan"
                    label="Chọn dự toán"
                    value={selectedCEId}
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

            <Button variant="outlined" onClick={onLoadData}>
                Load
            </Button>
        </section>
    )
}