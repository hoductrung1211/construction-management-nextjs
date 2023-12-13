import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={lsItem}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

const lsItem = [
  "Giao thông vận tải Hà Nội",
  "Giao thông vận tải Hồ Chí Minh",
  "Cao đẳng giao thông vận tải trung ương",
  "Đại học khoa học xã hội và nhân văn",
  "Đại học an ninh",
  "Đại học quốc tế",
  "Đại học nông lâm",
  "Đại học y dược",
  "Đại học sư phạm",
  "Đại hịc Sài Gòn",
  "Đại học Tôn Đức Thắng",
  "Đại học Hoa Sen",
  "Đại học luật",
  "Đại học công thương",
  "Đại học công nghiệp"
];