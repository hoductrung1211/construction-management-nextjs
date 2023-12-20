"use client";
import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import IConstructionSite from "@/models/ConstructionSite";
import IPlanTaskDiary from "@/models/PlanTaskDiary";
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

interface ISelectTaskProps {
    onLoadPlanTask: (planTaskId: number) => void;
}

export default function SelectTask({
    onLoadPlanTask
}: ISelectTaskProps) {
    // SUP
    const setLoading = useLoadingAnimation();
    const setAlert = useAlert();

    // Fill Data
    const [constructionSites, setConstructionSites] = useState<IConstructionSite[]>([]);
    const [tasks, setTasks] = useState<IPlanTaskDiary[]>([]);

    // Data
    const [selectedCSId, setSelectedCSId] = useState<string>();
    const handleCSChange = async (event: SelectChangeEvent) => {
        const CSId = event.target.value;
        setSelectedCSId(CSId);

        setLoading(true);
        try {

        }
        catch (ex) {
            setAlert({
                message: "",
                severity: "error"
            })
        }
        finally {
            setLoading(false);
        }
    }

    const [selectedTaskId, setSelectedTaskId] = useState<string>();
    const handleTaskChange = (event: SelectChangeEvent) => {
        const taskId = event.target.value;
        setSelectedTaskId(taskId);
    }

    function handleLoadPlanTask() {
        onLoadPlanTask(Number.parseInt(selectedTaskId));
    }

    return (
        <div className="flex gap-10">
            <FormControl
                className="w-[300px]"
                size="small"
            >
                <InputLabel>
                    Chọn công trình
                </InputLabel>
                <Select
                    className=" bg-white"
                    label="Chọn công trình"
                    value={selectedCSId}
                    onChange={handleCSChange}
                >
                    {constructionSites.map(cs => (
                        <MenuItem key={cs.constructionsiteid} value={cs.constructionsiteid}>
                            #{cs.constructionsitecode} {cs.constructionsitename}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>
                    Lưu ý: Danh sách công trình có dự toán đã duyệt
                </FormHelperText>
            </FormControl>

            <FormControl
                className="w-[300px]"
                size="small"
            >
                <InputLabel>Chọn hạng mục/công việc</InputLabel>
                <Select
                    className=" bg-white"
                    disabled={!selectedCSId}
                    label="Chọn hạng mục/công việc"
                    value={selectedTaskId}
                    onChange={handleTaskChange}
                >
                    {/* {workitemTaskList?.map((tk, idx) => (
                                <MenuItem key={idx} value={tk.plantaskid as number}>
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
                <FormHelperText>
                    Lưu ý: Danh sách công việc đã được tạo kế hoạch
                </FormHelperText>
            </FormControl>

            <Button
                className="bg-white"
                variant="outlined"
                disabled={!selectedTaskId}
                onClick={handleLoadPlanTask}
            >
                Load
            </Button>
        </div>
    )
}