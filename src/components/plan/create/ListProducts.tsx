"use client";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Icon from "../../Icon";
export default function ListProducts() {
  const listProducts = [
    {
      id: "#PD0001",
      pdName: "Xi măng",
      pdUnit: "Bao",
      pdAmount: 5,
    },
    {
      id: "#PD0002",
      pdName: "Cát",
      pdUnit: "m3",
      pdAmount: 100,
    },
    {
      id: "#PD0003",
      pdName: "Đá",
      pdUnit: "m3",
      pdAmount: 80,
    },
  ];
  return (
    <div className="mx-3 mb-3">
      <div className="py-2 w-full flex items-center justify-between bg-background-color">
        <div>
          <span className=" font-semibold text-text-color ml-4">
            Số lượng vật tư
          </span>
          <span className=" text-text-color ml-2">3</span>
        </div>
        <div className="mr-2">
          <FormControl size="small" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Vật tư
            </InputLabel>
            <OutlinedInput
              endAdornment={
                <Icon className=" text-text-color" name="magnifying-glass" />
              }
              label="Vật tư"
            />
          </FormControl>
        </div>
      </div>
      <div className="listProducts">
        {listProducts.map((item, idx) => (
          <div key={idx} className=" flex justify-between my-2 items-center">
            <p className=" w-3">{idx}</p>
            <p className=" w-14">{item.id}</p>
            <p className=" w-60">{item.pdName}</p>
            <p className=" w-10">{item.pdUnit}</p>
            <p className=" w-10">{item.pdAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
