"use client";

import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers";
import SelectTWSection from "@/features/diary/create/SelectTWSection";
import { useState } from "react";
import useAlert from "@/hooks/useAlert";

export default function ConstructionSiteInfo() {
  const [selectedCS, setSelectedCS] = useState("");
  const [selectedTaskWI, setSelectedTaskWI] = useState("");

  const handleCSChange = (event: SelectChangeEvent) => {
    setSelectedCS(event.target.value);
  };
  const handleChangetaskWI = (event: SelectChangeEvent) => {
    setSelectedTaskWI(event.target.value);
  };

  const setAlert = useAlert();
  return (
    <div className=" bg-background-color">
      <p className="ml-10 py-4 font-semibold text-lg ">
        Thông tin nhật ký công trình
      </p>
      <div className="bg-white rounded-lg py-5 mx-3">
        <SelectTWSection
          selectedCS={selectedCS}
          selectedTaskWI={selectedTaskWI}
          handleChangeCS={handleCSChange}
          handleChangetaskWI={handleChangetaskWI}
          
        />
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
                <p>300<span>m3</span></p>
                <p>100<span>m3</span></p>
                <p>140<span>m3</span></p>
                <TextField
                  className=" w-24"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    endAdornment: <div style={{ marginLeft: 5 }}>m&sup3;</div>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
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
