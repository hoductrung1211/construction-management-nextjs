"use client";

import { IconButton } from "@mui/material";
import Icon from "../Icon";
import { useState } from "react";

export default function ListPicture() {
  const [isShow, setIsShow] = useState(true);

  function handleChangeIsShow() {
    setIsShow(!isShow);
  }
  return (
    <div className="mx-10 mt-4 bg-background-color w-full rounded-t-lg">
      <div className=" flex space-x-2">
        <Icon
          className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
          name={isShow ? "angle-down" : "angle-right"}
          onClick={handleChangeIsShow}
        />
        <p className="font-semibold text-text-color">
          Hình ảnh<span className="ml-4 font-thin">5</span>
        </p>
      </div>
      <div className=" list-picture mx-3 py-3">
        <IconButton
          className="bg-[#AEAEB2] hover:bg-[#C6C6C9] w-32 h-32 rounded-none"
          aria-label="add-picture"
        >
          <Icon name="plus" className=" text-[#F2F2F7]" />
        </IconButton>
      </div>
    </div>
  );
}
