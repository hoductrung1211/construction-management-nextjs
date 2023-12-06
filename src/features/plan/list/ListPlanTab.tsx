"use client";
import { CustomTabPanel } from "@/components/TabPanel";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import FilterPlan from "../../../components/FilterPlan_Diary";
import ListPlan from "../../../components/plan/list/ListPlans";
import PageNumber from "../../../components/PageNumber";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ListPlanTab() {
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
          <Tab label="Đã xác nhận" {...a11yProps(0)} />
          <Tab label="Chờ đối chứng" {...a11yProps(1)} />
          <Tab label="Khác" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ListPlan />
        <PageNumber/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ListPlan />
        <PageNumber/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ListPlan />
        <PageNumber/>
      </CustomTabPanel>
    </Box>
  );
}
