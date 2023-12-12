"use client";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import SelectTWSection from "@/features/diary/create/SelectTWSection";
import { useState } from "react";
import useAlert from "@/hooks/useAlert";
import { DatePicker } from "@mui/x-date-pickers";
import IConstructionSite from "@/models/ConstructionSite";
import IPlanTaskDiary from "@/models/PlanTaskDiary";
import costEstimateAPI from "@/apis/costEstimate";
import constructionSiteAPI from "@/apis/constructionSite";
import planTaskAPI from "@/apis/plantask";

export interface SelectCESectionProps {
  selectedCS: string;
  selectedTaskWI: string;
  onChangeCS: (constructionSiteId: string) => void;
  showInfo: Boolean;
  onChangeShowInfo: (showInfo: boolean) => void;
  onChangetaskWI: (event: SelectChangeEvent) => void;
  // handleLoadAmountOfPlan: () => void;
}

export default function ConstructionSiteInfo({
  selectedCS,
  selectedTaskWI,
  onChangeCS,
  showInfo,
  onChangeShowInfo,
  onChangetaskWI,
}: // onChangetaskWI,
SelectCESectionProps) {
  // handleLoadAmountOfPlan,
  const [selectedConstruction, setselectedConstruction] = useState("");
  const [selectedTaskWorkitem, setSelectedTaskWorkitem] = useState("");
  const [contructionSiteList, setConstructionSiteList] = React.useState<
    IConstructionSite[]
  >([]);
  const [planTask, setPlanTask] = useState<IPlanTaskDiary>();

  const [workitemTaskList, setWorkitemTaskList] =
    React.useState<IPlanTaskDiary[]>();

  React.useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    const csListRes: IConstructionSite[] = await constructionSiteAPI.getListActive() || [];
    setConstructionSiteList(csListRes);
  };

  const handleCSChange = async (event: SelectChangeEvent) => {
    const csId = event.target.value;
    setselectedConstruction(csId);
    setWorkitemTaskList(await planTaskAPI.getList(csId) || []);
  };
  const handleChangetaskWI = async (event: SelectChangeEvent) => {
    const workitemtaskId = event.target.value;
    onChangetaskWI(event);
    setSelectedTaskWorkitem(workitemtaskId);
    // setWorkitemTaskList(await planTaskAPI.getList(csId));
  };
  const handleLoadPlanTaskInfo = async () => {
    const planTask = (await planTaskAPI.getPlanTask(selectedTaskWorkitem)  || [])[0];
    setPlanTask(planTask);
    onChangeShowInfo(true);
    console.log(planTask);
  };

  const setAlert = useAlert();
  return (
    <div className=" bg-background-color">
      <p className="ml-10 py-4 font-semibold text-lg ">
        Thông tin nhật ký công trình
      </p>
      <div className="bg-white rounded-lg py-5 mx-3">
        <section className=" flex mx-8 mb-5 space-x-14">
          <FormControl size="small">
            <InputLabel id="label-construction-site-plan">
              Chọn công trình
            </InputLabel>
            <Select
              className="w-72"
              labelId="label-construction-site-plan"
              label="Chọn công trình"
              value={selectedConstruction}
              onChange={handleCSChange}
            >
              {contructionSiteList.map((item, idx) => (
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
              value={selectedTaskWorkitem}
              onChange={handleChangetaskWI}
            >
              {workitemTaskList?.map((tk, idx) => (
                <MenuItem key={idx} value={tk.plantaskid as number}>
                  {tk.mdWorkItem.workitemCode +
                    " " +
                    tk.mdWorkItem.workitemname +
                    "/" +
                    tk.mdTask.taskcode +
                    " " +
                    tk.mdTask.taskname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className=" flex gap-5">
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
              <DatePicker
                label="Nhật ký ngày"
                slotProps={{ textField: { className: "w-72", size: "small" } }}
              />
            </LocalizationProvider>
            <Button variant="outlined" onClick={() => handleLoadPlanTaskInfo()}>
              Load
            </Button>
          </div>
        </section>
        {planTask && (
          <div className=" rounded-lg bg-[#F9FAFB] flex mx-6 gap-10">
            <div className="flex-col flex w-180 gap-8 mx-2">
              <div className="flex-col">
                <p className=" my-2 text-xl font-semibold">Thời tiết</p>
                <div className=" flex space-x-14">
                  <FormControl size="small">
                    <InputLabel id="label-construction-site-plan">
                      Chọn thời tiết
                    </InputLabel>
                    <Select
                      className=" w-72"
                      labelId="label-construction-site-plan"
                      label="Chọn thời tiết"
                    >
                      <MenuItem value="">Mưa</MenuItem>
                      <MenuItem value="">Nắng</MenuItem>
                      <MenuItem value="">Âm u</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    className="w-72"
                    size="small"
                    id="outlined-temperature"
                    label="Nhiệt độ"
                    variant="outlined"
                    InputProps={{
                      endAdornment: <div style={{ marginLeft: 5 }}>&deg;C</div>,
                    }}
                  />
                </div>
              </div>
              <div className="flex-col">
                <div className=" flex-col">
                  <p className=" my-2 text-xl font-semibold">Thời gian</p>
                  <div className="flex space-x-14">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["TimePicker"]}>
                        <TimePicker
                          label="Giờ bắt đầu"
                          slotProps={{
                            textField: { className: "  w-72", size: "small" },
                          }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["TimePicker"]}>
                        <TimePicker
                          label="Giờ kết thúc"
                          slotProps={{
                            textField: { className: "  w-72", size: "small" },
                          }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow flex-col bg-[#F9FAFB] space-y-4 mb-4 mx-2">
              <p className=" my-2 text-xl font-semibold">Tiến độ</p>
              <div>
                <p> bar</p>
              </div>
              <div className=" flex">
                <div className="w-80 space-y-2">
                  <p className=" font-semibold">Khối lượng kế hoạch</p>
                  <p className=" font-semibold">Khối lượng tích lũy</p>
                  <p className=" font-semibold">Khối lượng còn lại</p>
                  <p className=" font-semibold">Khối lượng hoàn thành</p>
                </div>
                <div className="w-30 space-y-2">
                  <p>
                    {planTask.amountofwork as number}
                    <span> m3</span>
                  </p>
                  <p>
                    100<span> m3</span>
                  </p>
                  <p>
                    140<span> m3</span>
                  </p>
                  <TextField
                    className=" w-24"
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <div style={{ marginLeft: 5 }}>m&sup3;</div>
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface ICSInfo {
  csId: string;
  csName: string;
  address: string;
  brand: string;
  creator: string;
  createdTime: Date;
  endDate: Date;
  startDate: Date;
}

const initCSInfo = {
  csId: "",
  csName: "",
  address: "",
  brand: "",
  creator: "",
  createdTime: new Date(2024, 11, 20),
  endDate: new Date(2024, 11, 20),
  startDate: new Date(2024, 11, 20),
};
