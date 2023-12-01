"use client";

import PlanDetail from "@/components/plan/PlanDetail";
import ListWorkItem_Task from "@/components/plan/ListWorkItem_Task";
import {
  Select,
  InputLabel,
  MenuItem,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import Icon from "@/components/Icon";
import React, { useState, useEffect } from "react";
import axios from "axios";
import APIConstructionSite from "@/apis/constructionSite";
import ConstructionSite from "@/models/ConstructionSite";
import APICostEstimate from "@/apis/costEstimate";
import CostEstimate from "@/models/CostEstimate";
import CostEstimateTask from "@/models/CostEstimateTask";

export default function Create() {
  const [listConstructions, setListConstructions] = React.useState<
    ConstructionSite[]
  >([]);

  const [construction, setConstruction] = React.useState<ConstructionSite>();

  const [costEstimate, setCostEstimate] = React.useState<CostEstimate>();

  const [costestimates, setCostestimates] = useState<CostEstimate[]>([]);

  const [costestimateTasks, setCostestimatesTasks] = useState<
    CostEstimateTask[]
  >([]);

  async function getListConstructionSite() {
    const api: ConstructionSite[] = await APIConstructionSite.getListActive();
    setListConstructions(api);
  }

  async function getConstruction(idConstruction: Number) {
    return await APIConstructionSite.getById(idConstruction);
  }

  async function getListCostEstimate(idCostEstimate: Number) {
    const api: CostEstimate[] = await APICostEstimate.getListCodeAndName(
      idCostEstimate
    );
    setCostestimates(api);
  }

  async function getListCostestimateTasks(idCostEstimate: Number) {
    const api: CostEstimateTask[] =
      await APICostEstimate.getListCostEstimateTasks(idCostEstimate);
    setCostestimatesTasks(api);
  }
  async function getCostEstimate(idCostEstimate: Number) {
    return await APICostEstimate.getById(idCostEstimate);
  }
  // React.useEffect(() => {
  //   getListConstructionSite();
  // }, []);

  // async function fetchData() {
  //   try {
  //     await getListConstructionSite();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const [selectedConstructionSite, setSelectedConstructionSite] = useState("");

  const handleConstructionSiteChange = (event: SelectChangeEvent) => {
    const selectedSite = event.target.value;
    setSelectedConstructionSite(selectedSite);
    getListCostEstimate(Number(selectedSite));
  };

  const [selectedCostEstimate, setSelectedCostEstimate] = useState("");

  const handleCostEstimateChange = (event: SelectChangeEvent) => {
    const selectedCE = event.target.value;
    setSelectedCostEstimate(selectedCE);
  };

  async function save() {
    setConstruction(await getConstruction(Number(selectedCostEstimate)));
    setCostEstimate(await getCostEstimate(Number(selectedCostEstimate)));
    await getListCostestimateTasks(Number(selectedCostEstimate));
  }
  const [csList, setCsList] = useState<ConstructionSite[]>([]);

  useEffect(() => {
    getListConstructionSite();
  }, []);
  // console.log(costestimates);
  // async function fetchCsList() {
  //   try {
  //     const { data } = await getAllConstructionSite();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div className="container-fluid bg-background-color">
      <div>
        <div className="ml-10 py-4 font-semibold text-lg ">
          Thông tin kế hoạch
        </div>
        <div className="bg-white rounded-lg py-5 mx-3">
          <div className="grid grid-cols-2 mx-8 mb-5 gap-20">
            <div>
              <FormControl size="small">
                <InputLabel id="label-construction-site-plan">
                  Chọn công trình
                </InputLabel>
                <Select
                  className="w-52"
                  labelId="label-construction-site-plan"
                  label="Chọn công trình"
                  value={selectedConstructionSite}
                  onChange={handleConstructionSiteChange}
                >
                  {listConstructions.length > 0 &&
                    listConstructions.map((item, idx) => (
                      <MenuItem key={idx} value={item.constructionsiteid}>
                        {item.constructionsitecode} -{" "}
                        {item.constructionsitename}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <p className="italic text-text-color my-2  text-sm">
                Lưu ý: Danh sách công trình có dự toán đã duyệt
              </p>
            </div>

            <div>
              <FormControl size="small">
                <InputLabel id="label-costestimate-plan">
                  Chọn dự toán
                </InputLabel>
                <Select
                  className="w-52"
                  labelId="label-costestimate-plan"
                  label="Chọn dự toán"
                  value={selectedCostEstimate}
                  onChange={handleCostEstimateChange}
                >
                  {costestimates.length > 0 &&
                    costestimates.map((item, idx) => (
                      <MenuItem key={idx} value={item.costestimateid}>
                        {item.costestimatecode} - {item.costestimatename}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <p className="italic text-text-color my-2  text-sm">
                Lưu ý: Danh sách dự toán của công trình đã được duyệt
              </p>
            </div>
          </div>
          <PlanDetail cSite={construction} cEstimate={costEstimate} />
        </div>
      </div>
      <ListWorkItem_Task cEstimateTask={costestimateTasks} />
      <div className="flex justify-end p-3">
        <div>
          <Button
            className=" bg-color-btn-save  hover:bg-color-btn-save mr-2"
            variant="contained"
            size="small"
            onClick={() => save()}
          >
            <span className="mx-2">
              <Icon name="floppy-disk" size="lg" />
            </span>
            Lưu
          </Button>
          <Button
            className=" bg-color-btn-send hover:bg-color-btn-send ml-2"
            variant="contained"
            size="small"
          >
            <span className="mx-2">
              <Icon name="paper-plane" size="lg" />
            </span>
            Gửi
          </Button>
        </div>
      </div>
    </div>
  );
}
