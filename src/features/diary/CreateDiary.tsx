"use client";
import Icon from "@/components/Icon";
import ConstructionSiteInfo from "@/components/diary/ConstructionSiteInfo";
import ListLaborsDiary from "@/components/diary/ListLaborsDiary";
import ListPicture from "@/components/diary/ListPicture";
import ListProblem from "@/components/diary/ListProblem";
import ListProductsDiary from "@/components/diary/ListProductsDiary";
import { Button, SelectChangeEvent, styled } from "@mui/material";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function CreateDiary() {
  return (
    <div className=" bg-background-color">
      <ConstructionSiteInfo />
      <ListLaborsDiary />
      <ListProductsDiary />
      <ListPicture/>
      <ListProblem/>
      {/* <Button
        component="label"
        role={undefined}
        tabIndex={-1}
        variant="outlined"
        className=" text-text-color border-text-color"
      >
        <Icon name="camera" className="mr-3" />
        Thêm ảnh
        <VisuallyHiddenInput type="file" />
      </Button> */}
    </div>
  );
}
