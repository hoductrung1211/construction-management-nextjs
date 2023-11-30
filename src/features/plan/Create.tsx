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
import { useState } from "react";

export default function Create() {
    const listcSites = [
        {
            id: '#BHX0001',
            cSiteName: 'Bách Hóa Xanh Lã Xuân Oai',
            lscEstiamte:[
                {
                    id: '#CE0001',
                    cEName: 'DT Bách Hóa Xanh 22/10/2023'
                },
                {
                    id: '#CE0002',
                    cEName: 'DT Bách Hóa Xanh 23/10/2023'
                }
            ]
        },
        {
            id: '#TGDD0001',
            cSiteName: 'Thế Giới Di Động Lê Văn Việt',
            lscEstiamte:[
                {
                    id: '#CE0003',
                    cEName: 'DT Thế Giới Di Động 25/10/2023'
                },
                {
                    id: '#CE0004',
                    cEName: 'DT Thế Giới Di Động 26/10/2023'
                }
            ]
        },
        {
            id: '#DMX0001',
            cSiteName: 'Điện Máy Xanh Phú Hữu',
            lscEstiamte:[
                {
                    id: '#CE0005',
                    cEName: 'DT Điện Máy Xanh 02/11/2023'
                },
                {
                    id: '#CE0006',
                    cEName: 'DT Điện Máy Xanh 03/11/2023'
                }
            ]
        },
        {
            id: '#AVK0001',
            cSiteName: 'AVAKids Lê Văn Việt',
            lscEstiamte:[
                {
                    id: '#CE0007',
                    cEName: 'DT AVAKids 06/11/2023'
                },
                {
                    id: '#CE0008',
                    cEName: 'DT AVAKids 07/11/2023'
                }
            ]
        }
    ]

    const [selectedConstructionSite, setSelectedConstructionSite] = useState('');

    const handleConstructionSiteChange = (event : SelectChangeEvent) => {
        const selectedSite = event.target.value;
        setSelectedConstructionSite(selectedSite);
    };

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
                    {listcSites.map((item,idx)=>(
                            <MenuItem key={idx} value={item.id}>{item.id} + {item.cSiteName}</MenuItem>
                        )
                    )}
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
                >
                  <MenuItem value="">DT-2312</MenuItem>
                  <MenuItem value="">DT-3452</MenuItem>
                  <MenuItem value="">DT3456</MenuItem>
                </Select>
              </FormControl>
              <p className="italic text-text-color my-2  text-sm">
                Lưu ý: Danh sách dự toán của công trình đã được duyệt
              </p>
            </div>
          </div>
          <PlanDetail />
        </div>
      </div>
      <ListWorkItem_Task />
      <div className="flex justify-end p-3">
        <div>
          <Button className=" bg-color-btn-save  hover:bg-color-btn-save mr-2" variant="contained" size="small">
            <span className="mx-2">
              <Icon name="floppy-disk" size="lg" />
            </span>
            Lưu
          </Button>
          <Button className=" bg-color-btn-send hover:bg-color-btn-send ml-2" variant="contained" size="small">
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
