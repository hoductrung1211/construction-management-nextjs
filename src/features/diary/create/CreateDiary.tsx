"use client";
import ConstructionSiteInfo from "@/components/diary/ConstructionSiteInfo";
import { ILaborList } from "@/components/diary/ListLaborsDiary";
import ListPicture from "@/components/diary/ListPicture";
import ListProblem from "@/components/diary/ListProblem";
import ListProductsDiary, { IProductList } from "@/components/diary/ListProductsDiary";
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
  const [labors, setLabors] = useState(initlistLabors);
  const [products, setProducts] = useState(initlistProducts);
  return (
    <div className=" bg-background-color">
      <ConstructionSiteInfo />
      <ListLaborsDiary lslabor={labors} />
      <ListProductsDiary lsproduct={products} />
      <ListPicture/>
      <ListProblem/>
    </div>
  );
}

const initlistLabors: ILaborList = {
  labors: [
    {
      isSelected: false,
      no: 1,
      laborCode: "#EL0001",
      firstName: "Diễm Quỳnh",
      lastName: "Hà",
      role: "Công nhân",
      shift: 8,
    },
    {
      isSelected: false,
      no: 2,
      laborCode: "#EL0002",
      firstName: "Hồ Hoàng Vy",
      lastName: "Chu",
      role: "Công nhân",
      shift: 4,
    },
    {
      isSelected: false,
      no: 2,
      laborCode: "#EL0003",
      firstName: "Thị Vân Khánh",
      lastName: "Nguyễn",
      role: "Công nhân",
      shift: 8,
    }
  ],
};

const initlistProducts: IProductList = {
  products: [
    {
      no: 1,
      pdId: "#PD0001",
      pdName: "Xi măng",
      pdUnit: "Bao",
      pdAmount: 5,
    },
    {
      no: 2,
      pdId: "#PD0002",
      pdName: "Cát",
      pdUnit: "m3",
      pdAmount: 100,
    },
    {
      no: 3,
      pdId: "#PD0003",
      pdName: "Đá",
      pdUnit: "m3",
      pdAmount: 80,
    }
  ],
};