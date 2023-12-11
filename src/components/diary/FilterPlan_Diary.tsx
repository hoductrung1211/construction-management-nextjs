"use client";

import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

const lsbrand = [
  {
    id: "#BR0001",
    brName: "Thế Giới Di Động",
  },
  {
    id: "#BR0002",
    brName: "Bách Hóa Xanh",
  },
  {
    id: "#BR0001",
    brName: "Điện Máy Xanh",
  },
  {
    id: "#BR0001",
    brName: "An Khang",
  },
];
export default function FilterPlan_Diary() {
  return (
    <div className=" flex justify-between my-3 mx-10">
      <div className="flex justify-between gap-5">
        <FormControl size="small">
          <InputLabel id="label-construction-site-plan">Chọn chuỗi</InputLabel>
          <Select
            className="w-72"
            labelId="label-construction-site-plan"
            label="Chọn chuỗi"
          >
            {lsbrand.map((item, idx) => (
              <MenuItem key={idx} value="">
                {item.id} + {item.brName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" className="w-72" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Nhập mã hoặc tên công trình
          </InputLabel>
          <OutlinedInput
            id="searchConstructionSite"
            endAdornment={
              <InputAdornment position="end">
                <Icon
                  name="magnifying-glass"
                  size="lg"
                  className=" text-apple-gray"
                />
              </InputAdornment>
            }
            label="Nhập mã hoặc tên công trình"
          />
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
          <DatePicker
            label="Ngày bắt đầu"
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
          <DatePicker
            label="Ngày kết thúc"
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
        <IconButton
          name="magnifying-glass"
          bgColor={true}
          className=" rounded-full"
        />
      </div>
      <div>
        <Button
          className=" bg-color-btn-send hover:bg-color-btn-send ml-2"
          variant="contained"
          size="small"
        >
          <span className="mx-2">
            <Icon name="plus" size="lg" />
          </span>
          Thêm mới
        </Button>
      </div>
    </div>
  );
}
