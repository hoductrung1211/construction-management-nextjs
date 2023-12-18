import React from "react";
import { ViewMode } from "gantt-task-react";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
type ViewSwitcherProps = {
  isChecked: boolean;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
  view: ViewMode;
};
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
  view,
}) => {
  return (
    <div className="flex justify-between items-center">
      <FormControlLabel
        label="Hiện công việc"
        control={<Checkbox checked={isChecked} onChange={() => onViewListChange(!isChecked)} />}
      />

      <div className="sticky top-0 right-0 mr-4 space-x-2">
        <Button
          className={`${
            view == ViewMode.Hour ? "bg-apple-gray-4" : ""
          } focus:bg-apple-gray-4 cursor-pointer`}
          onClick={() => onViewModeChange(ViewMode.Hour)}
        >
          Giờ
        </Button>

        <Button
          autoFocus={true}
          className={`${
            view == ViewMode.Day ? "bg-apple-gray-4" : ""
          } focus:bg-apple-gray-4 cursor-pointer`}
          onClick={() => onViewModeChange(ViewMode.Day)}
        >
          Ngày
        </Button>
        <Button
          className={`${
            view == ViewMode.Week ? "bg-apple-gray-4" : ""
          } focus:bg-apple-gray-4 cursor-pointer`}
          onClick={() => onViewModeChange(ViewMode.Week)}
        >
          Tuần
        </Button>
        <Button
          className={`${
            view == ViewMode.Month ? "bg-apple-gray-4" : ""
          } focus:bg-apple-gray-4 cursor-pointer`}
          onClick={() => onViewModeChange(ViewMode.Month)}
        >
          Tháng
        </Button>
        <Button
          className={`${
            view == ViewMode.Year ? "bg-apple-gray-4" : ""
          } focus:bg-apple-gray-4 cursor-pointer`}
          onClick={() => onViewModeChange(ViewMode.Year)}
        >
          Năm
        </Button>
      </div>
    </div>
  );
};
