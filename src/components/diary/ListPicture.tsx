"use client";

import { Button, IconButton, SelectChangeEvent } from "@mui/material";
import Icon from "../Icon";
import { ChangeEvent, useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";

export default function ListPicture() {
  const [isShow, setIsShow] = useState(true);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);


  function handleChangeIsShow() {
    setIsShow(!isShow);
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    // Chuyển danh sách các file thành mảng các URL hình ảnh
    if(files != null){
      const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    // Cập nhật trạng thái với danh sách hình ảnh đã chọn
      setSelectedImages(imageUrls);
    }
  };
  

return (
  <div className="mx-10 mt-4 bg-background-color w-full rounded-t-lg">
    <div className=" flex space-x-2">
        <Icon
          className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
          name={isShow ? "angle-down" : "angle-right"}
          onClick={handleChangeIsShow}
        />
        <p className="font-semibold text-text-color">Hình ảnh</p>
      </div>
      {
        isShow && <div className="list-picture flex gap-2 mx-3 py-3 relative">
        {selectedImages.slice(0, 2).map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Selected ${index}`}
            width={200}
            height={200}
            className="w-32 h-32 object-cover rounded-none"
          />
        ))}
        {selectedImages.length > 2 && (
          <div className="relative h-32 w-32">
            <Image
              key={2}
              src={selectedImages[2]}
              alt={`Selected 2`}
              fill
              className="w-32 h-32 object-contain bg-[#AEAEB2] opacity-60 rounded-none"
          />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-semibold text-2xl">
              + {selectedImages.length - 2}
            </div>
          </div>
         
        )}
        <Button
          className="w-32 h-32 bg-[#AEAEB2] rounded-none hover:bg-[#C6C6C9] hover:rounded-none"
          component="label"
          variant="contained"
        >
          <Icon name="plus" className=" text-[#F2F2F7]" size="2xl" />
          <input
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Button>
      </div>
      }
  </div>
);

}
