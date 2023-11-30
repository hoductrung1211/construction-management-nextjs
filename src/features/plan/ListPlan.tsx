"use client";
import { CustomTabPanel } from "@/components/TabPanel";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
export  default function ListPlan(){
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return(
        <Box sx={{ width: "100%" }}>
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
          
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          
        </CustomTabPanel>
      </Box>
    )
}