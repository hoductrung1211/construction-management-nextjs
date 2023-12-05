"use client";

import React, { useState } from "react";
import Icon from "../Icon";
import { styled } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

// import {
//   Unstable_NumberInput as BaseNumberInput,
//   NumberInputProps,
//   numberInputClasses,

// } from '@mui/base/Unstable_NumberInput';

// const CustomNumberInput = React.forwardRef(function CustomNumberInput(
//   props: NumberInputProps,
//   ref: React.ForwardedRef<HTMLDivElement>,
// ) {
//   return (
//     <BaseNumberInput
//       slots={{
//         root: StyledInputRoot,
//         input: StyledInputElement,
//         incrementButton: StyledButton,
//         decrementButton: StyledButton,
//       }}
//       slotProps={{
//         incrementButton: {
//           children: '▴',
//         },
//         decrementButton: {
//           children: '▾',
//         },
//       }}
//       {...props}
//       ref={ref}
//     />
//   );
// });

export default function ListProductsDiary() {
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

  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: number | string
  ) => {
    setValue(value as number);
  };
  const [isShow, setIsShow] = useState(true);

  function handleChangeIsShow() {
    setIsShow(!isShow);
  }
  return (
    <div className=" mt-4 bg-background-color w-full rounded-t-lg">
      <div className="flex gap-20 mx-10 justify-between">
        <div className=" flex space-x-2 mb-3">
          <Icon
            className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
            name={isShow ? "angle-down" : "angle-right"}
            onClick={handleChangeIsShow}
          />
          <p className="font-semibold text-text-color">
            Vật tư<span className="ml-4 font-thin">3</span>
          </p>
        </div>
        <div>
          <Icon name="plus" size="lg" className="text-text-color" />
        </div>
      </div>
      <div className="listProducts py-3 mx-3 bg-white">
        {isShow && listProducts.map((item, idx) => (
          <div
            key={idx}
            className=" flex justify-between mx-9 my-2 items-center"
          >
            <p className=" w-3">{idx}</p>
            <p className=" w-14">{item.id}</p>
            <p className=" w-60">{item.pdName}</p>
            <p className=" w-10">{item.pdUnit}</p>
            {/* <CustomNumberInput aria-label="amountOfDone" placeholder="Khối lượng hoàn thành" /> */}
            <div className="w-20">
              <input
                type="number"
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <span className=" w-2 mr-2">
              <Icon size="lg" className="text-text-color" name="xmark" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// const StyledInputRoot = styled('div')(
//   ({ theme }) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-weight: 400;
//   border-radius: 8px;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   box-shadow: 0px 2px 4px ${
//     theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
//   };
//   display: grid;
//   grid-template-columns: 1fr 19px;
//   grid-template-rows: 1fr 1fr;
//   overflow: hidden;
//   column-gap: 8px;
//   padding: 4px;

//   &.${numberInputClasses.focused} {
//     border-color: ${blue[400]};
//     box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
//   }

//   &:hover {
//     border-color: ${blue[400]};
//   }

//   // firefox
//   &:focus-visible {
//     outline: 0;
//   }
// `,
// );

// const StyledInputElement = styled('input')(
//   ({ theme }) => `
//   font-size: 0.875rem;
//   font-family: inherit;
//   font-weight: 400;
//   line-height: 1.5;
//   grid-column: 1/2;
//   grid-row: 1/3;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   background: inherit;
//   border: none;
//   border-radius: inherit;
//   padding: 8px 12px;
//   outline: 0;
// `,
// );

// const StyledButton = styled('button')(
//   ({ theme }) => `
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: center;
//   align-items: center;
//   appearance: none;
//   padding: 0;
//   width: 19px;
//   height: 19px;
//   font-family: system-ui, sans-serif;
//   font-size: 0.875rem;
//   line-height: 1;
//   box-sizing: border-box;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 0;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 120ms;

//   &:hover {
//     background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
//     border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
//     cursor: pointer;
//   }

//   &.${numberInputClasses.incrementButton} {
//     grid-column: 2/3;
//     grid-row: 1/2;
//     border-top-left-radius: 4px;
//     border-top-right-radius: 4px;
//     border: 1px solid;
//     border-bottom: 0;
//     border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//     background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
//     color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};

//     &:hover {
//       cursor: pointer;
//       color: #FFF;
//       background: ${theme.palette.mode === 'dark' ? blue[600] : blue[500]};
//       border-color: ${theme.palette.mode === 'dark' ? blue[400] : blue[600]};
//     }
//   }

//   &.${numberInputClasses.decrementButton} {
//     grid-column: 2/3;
//     grid-row: 2/3;
//     border-bottom-left-radius: 4px;
//     border-bottom-right-radius: 4px;
//     border: 1px solid;
//     border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//     background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
//     color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
//   }

//   &:hover {
//     cursor: pointer;
//     color: #FFF;
//     background: ${theme.palette.mode === 'dark' ? blue[600] : blue[500]};
//     border-color: ${theme.palette.mode === 'dark' ? blue[400] : blue[600]};
//   }

//   & .arrow {
//     transform: translateY(-1px);
//   }

//   & .arrow {
//     transform: translateY(-1px);
//   }
// `,
// );
