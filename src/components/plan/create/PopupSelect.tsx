"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ListLabors from "./ListLabors";
import { CustomTabPanel } from "../../TabPanel";
import ListProducts from "./ListProducts";
import ListDiaries from "./ListDiaries";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PopupSelect() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className=" mt-4 py-3 bg-background-color w-full rounded-t-lg">
        <div className="flex ml-5">
          <div className=" flex-col pr-5">
            <p className="font-semibold  text-center">Hạng mục</p>
            <p className="font-thin text-center text-text-color">#WI0323</p>
          </div>
          <div className=" flex-col px-5 border-x-2 border-text-color">
            <p className="font-semibold text-center">Công việc</p>
            <p className="font-thin text-center text-text-color">#TSK0213</p>
          </div>
          <p className="font-semibold pl-5 my-auto">200<span>m3</span></p>
        </div>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Nhân công" {...a11yProps(0)} />
            <Tab label="Vật tư" {...a11yProps(1)} />
            <Tab label="Nhật ký" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ListLabors />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ListProducts />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ListDiaries/>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
