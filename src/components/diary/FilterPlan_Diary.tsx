"use client";

import Icon from "@/components/Icon";
import {
  Autocomplete,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

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
  const [options, setOptions] = useState(lsItem.slice(0,10));
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setInputValue(value);

    if (value === '') {
      setOptions(lsItem.slice(0, 10));
    } else {
      setOptions(lsItem);
    }
  };

  return (
    <div className=" flex justify-between my-3 mx-10">
      <div className="flex justify-between gap-5">
      <Autocomplete
      size="small"
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 250 }}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Nhập mã hoặc tên công trình"
        />
      )}
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

const lsItem = [
  "Giao thông vận tải Hà Nội",
  "Giao thông vận tải Hồ Chí Minh",
  "Cao đẳng giao thông vận tải trung ương",
  "Đại học khoa học xã hội và nhân văn",
  "Đại học an ninh",
  "Đại học quốc tế",
  "Đại học nông lâm",
  "Đại học y dược",
  "Đại học sư phạm",
  "Đại học Sài Gòn",
  "Đại học Tôn Đức Thắng",
  "Đại học Hoa Sen",
  "Đại học luật",
  "Đại học công thương",
  "Đại học công nghiệp"
];
