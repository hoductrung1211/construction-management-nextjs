"use client";
import { MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

export default function CurrentDiary() {
  const [filterValue, setFilterValue] = useState(0);

  return (
    <div>
      <Filter
        value={filterValue}
        onChange={setFilterValue}
      />
      <List value={filterValue} />
    </div>    
  )
}

function Filter({
  value,
  onChange
}: {
    value: number;
    onChange: (value: number) => void;
}) {
  return (
    <div className="flex flex-col gap-10">
      <Select
        value={value}
        onChange={e => {
          onChange(Number.parseInt(e.target.value + ""))
        }}
      >
        <MenuItem value={0}>Công trình 0</MenuItem>
        <MenuItem value={1}>Công trình 1</MenuItem>
        <MenuItem value={2}>Công trình 2</MenuItem>
      </Select>
    </div>
  )
}

function List({
  value
}: {
    value: number;
}) {
  return (
    <section className="grid place-items-center w-full h-screen bg-green-100">
      {value}
    </section>
  )
}