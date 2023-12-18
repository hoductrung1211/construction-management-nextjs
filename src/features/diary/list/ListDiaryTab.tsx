"use client";

import diaryApi from "@/apis/diary";
import { CustomTabPanel } from "@/components/TabPanel";
import ListDiaryCurrent from "@/components/diary/list/ListDiaryCurrent";
import PageNumber from "@/components/diary/list/PageNumber";

import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import ListDiaryWaitingConfirm from "@/components/diary/list/ListDiaryWaitingConfirm";
import ListDiaryWaitingApprove from "@/components/diary/list/ListDiaryWaitingApprove";
import ListDiaryDenyConfirm from "@/components/diary/list/ListDiaryDenyConfirm";
import ListDiaryDenyApprove from "@/components/diary/list/ListDiaryDenyApprove";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ListDiaryTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className=" bg-[#F5F5F5]" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Gần đây" {...a11yProps(0)} />
          <Tab label="Chờ đối chứng" {...a11yProps(1)} />
          <Tab label="Chờ duyệt" {...a11yProps(2)} />
          <Tab label="Từ chối đối chứng" {...a11yProps(1)} />
          <Tab label="Từ chối duyệt" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ListDiaryCurrent />
        <PageNumber />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ListDiaryWaitingConfirm />
        <PageNumber />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ListDiaryWaitingApprove />
        <PageNumber />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ListDiaryDenyConfirm />
        <PageNumber />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <ListDiaryDenyApprove />
        <PageNumber />
      </CustomTabPanel>
    </Box>
  );
}
