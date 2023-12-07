import { FormControl, InputLabel, MenuItem, Select, StepTypeMap } from "@mui/material";
import Icon from "../Icon";

export interface ILabor{
    isSelected: boolean;
    no: number;
    laborCode: string;
    lastName: string;
    firstName: string;
    role: string
}
export default function Labors({
    labor
}:{
    labor: ILabor
}
){
   
    const {
        isSelected,
        no,
        laborCode,
        lastName,
        firstName,
        role
    } = labor; 
    return(
        <div
        className=" flex justify-between mx-9 my-2 items-center"
      >
        <p className=" w-3">{no}</p>
        <p className=" w-14">{laborCode}</p>
        <p className=" w-64">
          {lastName} {firstName}
        </p>
        <p className=" w-64">{role}</p>
        <FormControl size="small">
          <InputLabel id="label-construction-site-plan">
            Chọn ca làm
          </InputLabel>
          <Select
            className="w-40"
            labelId="label-construction-site-plan"
            label="Chọn hạng mục-công việc"
          >
            <MenuItem value="">Ca HC(8h-17h)</MenuItem>
            <MenuItem value="">Ca PartTime(8h-11h30)</MenuItem>
            <MenuItem value="">Ca PartTime(13h-17h)</MenuItem>
          </Select>
        </FormControl>
        <span className=" w-2 mr-2">
          <Icon size="lg" className="text-text-color" name="xmark" />
        </span>
      </div>  
    )
}