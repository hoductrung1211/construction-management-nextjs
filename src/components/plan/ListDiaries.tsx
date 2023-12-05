"use client";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Icon from "../Icon";
export default function ListDiaries() {
  const listDiarys = [
    {
      id: "#DR0001",
      amountOfWorkDone: 200,
      dateOfDiary: "12/10/2023",
    },
    {
      id: "#DR0002",
      amountOfWorkDone: 200,
      dateOfDiary: "13/10/2023",
    },
    {
      id: "#DR0003",
      amountOfWorkDone: 200,
      dateOfDiary: "14/10/2023",
    },
  ];
  return (
    <div className="mx-3 mb-3">
      <div className="py-2 flex items-center justify-between bg-background-color">
        <div>
          <span className=" font-semibold text-text-color ml-4">
            Tổng nhật ký
          </span>
          <span className=" text-text-color ml-2">3</span>
        </div>
        <div className="mr-2">
          <FormControl size="small" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Nhật ký
            </InputLabel>
            <OutlinedInput
              endAdornment={
                <Icon className=" text-text-color" name="magnifying-glass"/>
              }
              label="Nhật ký"
            />
          </FormControl>
        </div>
      </div>
      <div className="listLabors">
      {listDiarys.map((item,idx)=>(
              <div key={idx} className=" flex justify-between my-2 items-center">
                <p className=" w-3">{idx}</p>
                <p className=" w-14">{item.amountOfWorkDone}</p>
                <p className=" w-64">{item.dateOfDiary}</p>
                <span className=" w-2 mr-3">
                  <Icon size="lg" className="text-text-color" name="arrow-up-right-from-square"/>
                </span>
              </div>
            ))}
      </div>
        
    </div>
  );
}
