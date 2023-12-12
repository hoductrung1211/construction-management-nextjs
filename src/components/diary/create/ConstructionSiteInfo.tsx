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
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";
import useAlert from "@/hooks/useAlert";
import {
  DateCalendar,
  DatePicker,
  DesktopDatePicker,
  MobileDatePicker,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import IConstructionSite from "@/models/ConstructionSite";
import IPlanTaskDiary from "@/models/PlanTaskDiary";
import costEstimateAPI from "@/apis/costEstimate";
import constructionSiteAPI from "@/apis/constructionSite";
import planTaskAPI from "@/apis/plantask";
import { IWeather } from "@/models/Weather";
import dairyApi from "@/apis/dairy";
import dayjs from "dayjs";
import "dayjs/locale/vi";
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
  const defaultDate = dayjs(Date.now.toString()).locale("vi");
  // handleLoadAmountOfPlan,
  const [selectedConstruction, setselectedConstruction] = useState("");
  const [selectedTaskWorkitem, setSelectedTaskWorkitem] = useState("");
  // const [selectedStartTime, setselectedStartTime] = useState(new Date());
  // const [selectedEndTime, setselectedEndTime] = useState(Date);
  const [weatherList, setWeatherList] = React.useState<IWeather[]>([]);
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
    const csListRes: IConstructionSite[] =
      (await constructionSiteAPI.getListActive()) || [];
    setConstructionSiteList(csListRes);
  };

  const handleCSChange = async (event: SelectChangeEvent) => {
    const csId = event.target.value;
    setselectedConstruction(csId);
    setWorkitemTaskList((await planTaskAPI.getList(csId)) || []);
  };
  const handleChangetaskWI = async (event: SelectChangeEvent) => {
    const workitemtaskId = event.target.value;
    onChangetaskWI(event);
    setSelectedTaskWorkitem(workitemtaskId);
    // setWorkitemTaskList(await planTaskAPI.getList(csId));
  };
  const handleLoadPlanTaskInfo = async () => {
    const planTask = ((await planTaskAPI.getPlanTask(selectedTaskWorkitem)) ||
      [])[0];
    const weathers = (await dairyApi.getWeather()) || [];
    setWeatherList(weathers);
    setPlanTask(planTask);
    onChangeShowInfo(true);
    console.log(planTask);
  };

  const setAlert = useAlert();
  dayjs.locale("vi");
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
          <Button variant="outlined" onClick={() => handleLoadPlanTaskInfo()}>
            Load
          </Button>
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
                      {weatherList.map((item, idx) => (
                        <MenuItem key={idx} value={item.weatherid}>
                          {item.weathername}
                        </MenuItem>
                      ))}
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
                          // value={selectedStartTime.toLocaleString("en-gb")}
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
                    <span>
                      {planTask.mdTask.mdQuantityUnit.quantityunitname}
                    </span>
                  </p>
                  <p>
                    100
                    <span>
                      {planTask.mdTask.mdQuantityUnit.quantityunitname}
                    </span>
                  </p>
                  <p>
                    140
                    <span>
                      {planTask.mdTask.mdQuantityUnit.quantityunitname}
                    </span>
                  </p>
                  <TextField
                    className=" w-24"
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <div style={{ marginLeft: 5 }}>
                          {planTask.mdTask.mdQuantityUnit.quantityunitname}
                        </div>
                      ),
                    }}
                    
                  />
                </div>
              </div>
            </div>
            <div className="grow flex-col bg-[#F9FAFB] mb-4">
              <p className="text-xl font-semibold ml-6">Ngày nhật ký</p>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DateCalendar className="m-0"/>
              </LocalizationProvider>
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
