'use client';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { useState } from "react";

export default function EnhancedTableToolbar({
    numSelected
}: {
    numSelected: number;
}) {
    const [department, setDepartment] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setDepartment(event.target.value as string);
    };

    return (
        <div className="h-16 px-3 flex justify-between items-center">
            <div className="w-full">
                <FormControl variant="standard" size="small" >
                    <InputLabel id="demo-simple-select-label">Department</InputLabel>
                    <Select
                        className="min-w-[120px]"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={department}
                        label="Department"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>IT</MenuItem>
                        <MenuItem value={20}>HR</MenuItem>
                        <MenuItem value={30}>Finance</MenuItem>
                    </Select>
                </FormControl> 
            </div>

            <div className="flex gap-3">
                <Button variant="contained" endIcon={<CreateIcon />}>
                    Create
                </Button>
            </div>
        </div>
    )
}