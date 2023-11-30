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
export default function ListLabors() {
  const listLabors = [
    {
      id: "#EL0001",
      firstName: "Diễm Quỳnh",
      lastName: "Hà",
    },
    {
      id: "#EL0002",
      firstName: "Hồ Hoàng Vy",
      lastName: "Chu",
    },
    {
      id: "#EL0003",
      firstName: "Thị Vân Khánh",
      lastName: "Nguyễn",
    },
  ];

  return (
    <div className="mx-3 mb-3">
      <div className="py-2 flex items-center justify-between bg-background-color">
        <div>
          <span className=" font-semibold text-text-color ml-4">
            Tổng nhân công
          </span>
          <span className=" text-text-color ml-2">4</span>
        </div>
        <div className="mr-2">
          <FormControl size="small" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Nhân công
            </InputLabel>
            <OutlinedInput
              endAdornment={
                <Icon className=" text-text-color" name="magnifying-glass" />
              }
              label="Nhân công"
            />
          </FormControl>
        </div>
      </div>
      <div className="list-labor  bg-white">
        {listLabors.map((item, idx) => (
          <div key={idx} className=" flex justify-between my-2 items-center">
            <p className=" w-3">{idx}</p>
            <p className=" w-14">{item.id}</p>
            <p className=" w-64">
              {item.lastName} {item.firstName}
            </p>
            <span className=" w-2 mr-3">
              <Icon size="lg" className="text-text-color" name="xmark" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
