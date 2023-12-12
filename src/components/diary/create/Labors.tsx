import Icon from "@/components/Icon";
import { IEmployee } from "@/models/Employee";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  StepTypeMap,
} from "@mui/material";

export interface ILabor {
  isSelected: boolean;
  no: number;
  laborCode: string;
  lastName: string;
  firstName: string;
  role: string;
  shift: number;
}
export default function Labors({
  labor,
  no,
  handleRemoveLabor: handleRemoveLabor
}: {
  labor: IEmployee;
  no: number;
  handleRemoveLabor: (idx: string ) => void;
}) {
  console.log(no,handleRemoveLabor);
  return (
    <div className=" bg-white flex justify-between mx-9 my-3 items-center">
      <p className=" w-3">{no}</p>
      <p className=" w-14">#{labor.userid}</p>
      <p className=" w-64">
        {labor.lastname} {labor.firstname}
      </p>
      <p className=" w-64">Công nhân</p>
      <FormControl size="small">
        <InputLabel id="label-construction-site-plan">Chọn ca làm</InputLabel>
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
      <span className=" w-2 mr-2 cursor-pointer" onClick={() => handleRemoveLabor(labor.userid)}>
        <Icon size="lg" className="text-text-color" name="xmark" />
      </span>
    </div>
  );
}
