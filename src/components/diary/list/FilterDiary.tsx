"use client";

import constructionSiteAPI from "@/apis/constructionSite";
import Icon from "@/components/Icon";
import IConstructionSite from "@/models/ConstructionSite";
import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FilterDiary({
  value,
  onChangeCS,
}: {
  value: number;
  onChangeCS: (value: number) => void;
}) {
  const [contructionSiteList, setConstructionSiteList] = React.useState<
    IConstructionSite[]
  >([]);
  const [options, setOptions] = useState(contructionSiteList.slice(0, 10));
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  React.useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    const csListRes: IConstructionSite[] =
      (await constructionSiteAPI.getListActive()) || [];
    setConstructionSiteList(csListRes);
  };

  const defaultProps = {
    options: contructionSiteList,
    getOptionLabel: (option: IConstructionSite) =>
      "#" + option.constructionsiteid + " " + option.constructionsitename,
  };

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setInputValue(value);

    if (value === "") {
      setOptions(contructionSiteList.slice(0, 10));
    } else {
      setOptions(contructionSiteList);
    }
  };

  const handleClick = () => {
    router.push("/construction-diaries/create");
  };

  return (
    <div className=" flex justify-between my-3 mx-10">
      <div className="flex justify-between gap-5">
        <Autocomplete
          {...defaultProps}
          size="small"
          disablePortal
          id="selectConstructionSite"
          sx={{ width: 250 }}
          onInputChange={handleInputChange}
          onChange={(event, selectedOption) => {
            if (selectedOption) {
              onChangeCS(selectedOption.constructionsiteid);
            }
          }}
          renderInput={(params) => (
            <TextField {...params} label="Nhập mã hoặc tên công trình" />
          )}
        />
      </div>
      <div>
        <Button
          className=" bg-color-btn-send hover:bg-color-btn-send ml-2"
          variant="contained"
          size="small"
          onClick={handleClick}
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