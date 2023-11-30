"use client";
import { Box, TextField } from "@mui/material";
import Icon from "../Icon";
import ListLabors from "./ListLabors";

export default function PopupAddSupervisor() {
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
    <div>
      <div className=" bg-[#F9FAFB] mx-3 flex justify-between items-center">
        <div>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Icon
              name="magnifying-glass"
              size="xl"
              className="text-text-color"
            />
            <TextField
              id="input-with-sx"
              className="text-text-color ml-3 w-60"
              label="Tìm người giám sát"
              variant="standard"
            />
          </Box>
        </div>
        <div>
          <span className=" w-2">
            <Icon size="lg" className="text-text-color" name="xmark" />
          </span>
        </div>
      </div>
      <div className="list-labor bg-white mx-3 mt-3">
        {listLabors.map((item, idx) => (
        <div key={idx} className=" flex justify-between my-2 items-center">
          <p className=" w-3">{idx}</p>
          <p className=" w-14">{item.id}</p>
          <p className=" w-64">
            {item.lastName} {item.firstName}
          </p>
        </div>
      ))}
          
        </div>
    </div>
  );
}
