"use client";

import { FormControl, InputLabel, Select, TextField } from "@mui/material";
import { DateCalendar, TimePicker } from "@mui/x-date-pickers";

interface IDiaryOverviewProps {

}

export default function DiaryOverview({

}: IDiaryOverviewProps) {
    return (
        <div className=" p-5 grid grid-cols-11 gap-5 border rounded-md bg-white">
            <div className="col-span-4 flex flex-col gap-10">
                <section className="grid grid-cols-2 gap-3">
                    <h3 className="col-span-2 text-xl font-semibold">
                        Thời tiết
                    </h3>
                    <FormControl
                        fullWidth
                        size="small"
                    >
                        <InputLabel>Chọn thời tiết</InputLabel>
                        <Select
                            label="Chọn thời tiết"
                        // value={selectedWeather}
                        // onChange={onChangeWeather}
                        >
                            {/* {weather.map((item, idx) => (
                        <MenuItem key={idx} value={item.weatherid}>
                          {item.weathername}
                        </MenuItem>
                      ))} */}
                        </Select>
                    </FormControl>
                    <TextField
                        size="small"
                        label="Nhiệt độ"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <div style={{ marginLeft: 5 }}>&deg;C</div>,
                        }}
                        type="number"
                    // value={temperature}
                    // onChange={(e) => onChangeTemperature(e)}
                    />
                </section>

                <section className="grid grid-cols-2  gap-3">
                    <h3 className="col-span-2 text-xl font-semibold">
                        Thời gian
                    </h3>
                    <TimePicker
                        label="Giờ bắt đầu"
                        // value={startTime}
                        // onChange={(value) => onChangeStartTime(value as Dayjs)}
                        slotProps={{
                            textField: { size: "small" },
                        }}
                    />
                    <TimePicker
                        label="Giờ bắt đầu"
                        // value={startTime}
                        // onChange={(value) => onChangeStartTime(value as Dayjs)}
                        slotProps={{
                            textField: { size: "small" },
                        }}
                    />
                </section>
            </div>
            <div className="col-span-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold">Tiến độ</h3>
            </div>
            <div className="col-span-3 flex flex-col items-center">
                <h3 className="text-xl font-semibold">Ngày nhật ký</h3>
                <DateCalendar
                    className="m-0"
                    // value={dateOfDiary}
                    // onChange={(value) => onChangeDateOfDiary(value as Dayjs)}
                />
            </div>
        </div>
    )
}