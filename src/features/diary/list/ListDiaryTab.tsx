"use client";

import dairyApi from "@/apis/dairy";
import { CustomTabPanel } from "@/components/TabPanel";
import ListDiaries from "@/components/diary/list/ListDiaries";
import PageNumber from "@/components/diary/list/PageNumber";
import IDiary from "@/models/Diary";

import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ListDiaryTab() {
  const [value, setValue] = React.useState(0);
  const [listDiariesResent, setListDiariesResent] = React.useState<IDiary[]>(
    []
  );
  const [listDiariesReview, setListDiariesReview] = React.useState<IDiary[]>(
    []
  );
  const [listDiariesOther, setListDiariesOther] = React.useState<IDiary[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const fetchInitialData = async () => {
    const lsDiariesRecent: IDiary[] = (await dairyApi.getListDiaries(1)) || [];
    setListDiariesResent(lsDiariesRecent);
    const lsDiariesReview: IDiary[] = (await dairyApi.getListDiaries(2)) || [];
    setListDiariesReview(lsDiariesReview);
    const lsDiariesOther: IDiary[] = (await dairyApi.getListDiaries(3)) || [];
    setListDiariesOther(lsDiariesOther);
  };

  React.useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <Box className=" bg-[#F5F5F5]" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Gần đây" {...a11yProps(0)} />
          <Tab label="Chờ đối chứng/duyệt" {...a11yProps(1)} />
          <Tab label="Khác" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ListDiaries lsDiaries={listDiariesResent} />
        <PageNumber />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ListDiaries lsDiaries={listDiariesReview} />
        <PageNumber />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ListDiaries lsDiaries={listDiariesOther} />
        <PageNumber />
      </CustomTabPanel>
    </Box>
  );
}
