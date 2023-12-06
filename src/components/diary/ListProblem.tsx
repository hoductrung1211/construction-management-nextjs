"use client";

import { IconButton, TextField } from "@mui/material";
import Icon from "../Icon";
import Image from "next/image";
import { useState } from "react";

export default function ListProblem() {
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
        <p className="font-semibold text-text-color">Sự cố</p>
      </div>
      <div className="problem-info flex mx-3 py-3 gap-10">
        <div className=" flex gap-5">
          <div className="lspicture flex gap-1">
            <div className="relative w-32 h-32">
              <Image
                className="object-contain "
                src="https://www.procore.com/library/wp-content/uploads/2023/03/10-Types-of-Construction-Companies-What-They-Do-Procore-Blog-Hero.png"
                alt=""
                fill
              />
            </div>
          </div>
          <IconButton
            className="bg-[#AEAEB2] hover:bg-[#C6C6C9] w-32 h-32 rounded-none"
            aria-label="add-picture"
          >
            <Icon name="plus" className=" text-[#F2F2F7]" />
          </IconButton>
        </div>
        <div>
          <TextField
            className="w-72"
            id="outlined-problem"
            label="Nội dung sự cố"
            multiline
            rows={4}
          />
        </div>
      </div>
    </div>
  );
}
