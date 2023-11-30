"use client";

import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers";

export default function ConstructionSiteInfo() {
  return (
    <div className="container-fluid bg-background-color">
      <p className="ml-10 py-4 font-semibold text-lg ">
        Thông tin nhật ký công trình
      </p>
      <div className="bg-white rounded-lg py-5 mx-3">
        <div className="grid grid-cols-3 mx-8 mb-5 gap-20">
          <FormControl size="small">
            <InputLabel id="label-construction-site-plan">
              Chọn hạng mục-công việc
            </InputLabel>
            <Select
              className="w-72"
              labelId="label-construction-site-plan"
              label="Chọn hạng mục-công việc"
            >
              <MenuItem value="">DT-2312</MenuItem>
              <MenuItem value="">DT-3452</MenuItem>
              <MenuItem value="">DT3456</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel id="label-costestimate-plan">Chọn dự toán</InputLabel>
            <Select
              className="w-72"
              labelId="label-costestimate-plan"
              label="Chọn dự toán"
            >
              <MenuItem value="">DT-2312</MenuItem>
              <MenuItem value="">DT-3452</MenuItem>
              <MenuItem value="">DT3456</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
            <DatePicker
              label="Ngày xem"
              slotProps={{ textField: { className: "w-72", size: "small" } }}
            />
          </LocalizationProvider>
        </div>
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
                  size = "small"
                  id="outlined-temperature" 
                  label="Nhiệt độ"
                  variant="outlined"
                  InputProps={{
                    endAdornment: <div style={{ marginLeft: 5 }}>&deg;C</div>,
                  }} />
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
                <p>300</p>
                <p>100</p>
                <p>140</p>
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
