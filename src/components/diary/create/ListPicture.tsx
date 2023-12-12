"use client";

import { Button, IconButton, SelectChangeEvent } from "@mui/material";
import Icon from "../../Icon";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { ModalImage } from "../detail/ListPicture";

export default function ListPicture() {
  const [isShow, setIsShow] = useState(true);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleChangeIsShow() {
    setIsShow(!isShow);
  }

  const openLightbox = (imageLink: string, index: number) => {
    setSelectedImage(imageLink);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    // Chuyển danh sách các file thành mảng các URL hình ảnh
    if (files != null) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );

      // Cập nhật trạng thái với danh sách hình ảnh đã chọn
      const newList = selectedImages.concat(imageUrls);
      setSelectedImages(newList);
    }
  };

  const changeImage = (direction: "prev" | "next") => {
    let newIndex;
    if (direction === "next") {
      if (currentImageIndex == selectedImages.length - 1) {
        return;
      }
      newIndex = currentImageIndex + 1;
    } else {
      if (currentImageIndex == 0) {
        return;
      }
      newIndex = currentImageIndex - 1;
    }

    setSelectedImage(selectedImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const image4 = selectedImages.length > 3 && (
    <div
      className="relative h-32 w-32"
      onClick={() => openLightbox(selectedImages[3], 3)}
    >
      <Image
        src={selectedImages[3]}
        alt="Selected 3"
        fill
        className="w-32 h-32 object-contain bg-[#AEAEB2] opacity-60 rounded-none cursor-pointer"
        itemType=""
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-semibold text-2xl">
        + {selectedImages.length - 3}
      </div>
    </div>
  );

  function handleRemoveFiles(imgURL: string){
    const newList = selectedImages.filter(img => img !== imgURL);
    console.log(newList);
    setSelectedImages(newList);
  }

  return (
    <div className="mt-4 bg-background-color w-full rounded-t-lg">
      <div className="flex space-x-2 ">
        <Icon
          className="  ml-3  grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
          name={isShow ? "angle-down" : "angle-right"}
          onClick={handleChangeIsShow}
        />
        <p className="font-semibold text-text-color">Hình ảnh</p>

      </div>
      {isShow && (
        <div className="list-picture flex gap-10 mx-3 py-3 relative">
          <div className=" ml-3 flex gap-2">
            {selectedImages.slice(0, 3).map((imageUrl, index) => (
              <div key={index} className="relative">
                <Image
                  src={imageUrl}
                  alt={`Selected ${index}`}
                  width={200}
                  height={200}
                  className="w-32 h-32 object-cover rounded-none cursor-pointer"
                  onClick={() => openLightbox(imageUrl, index)}
                ></Image>
                <Icon
                  size="lg"
                  className="text-text-color absolute top-0 right-0 mr-1 cursor-pointer"
                  name="xmark"
                  onClick={()=> handleRemoveFiles(imageUrl)}
                />

              </div>
            ))}
            {image4}
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
        </div>
      )}
      {selectedImage && (
        <ModalImage
          imageUrl={selectedImage}
          onClose={closeLightbox}
          onNext={() => changeImage("next")}
          onPrev={() => changeImage("prev")}
          currentIndex={currentImageIndex}
          totalImages={selectedImages.length}
        />
      )}
    </div>
  );
}
