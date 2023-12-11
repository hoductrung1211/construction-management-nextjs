"use client";

import { Button, IconButton, SelectChangeEvent, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import Icon from "@/components/Icon";
import { IImagesList, ModalImage } from "./ListPicture";

export default function ListProblem({ lsimages }: { lsimages: IImagesList }) {
  const [isShow, setIsShow] = useState(true);
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

  const changeImage = (direction: "prev" | "next") => {
    let newIndex;
    if (direction === "next") {
      if (currentImageIndex == lsimages.images.length - 1) {
        return;
      }
      newIndex = currentImageIndex + 1;
    } else {
      if (currentImageIndex == 0) {
        return;
      }
      newIndex = currentImageIndex - 1;
    }

    setSelectedImage(lsimages.images[newIndex].imageLink);
    setCurrentImageIndex(newIndex);
  };

  const image4 = lsimages.images.length > 3 && (
    <div className="relative h-32 w-32"
    onClick={() => openLightbox(lsimages.images[3].imageLink, 3)}>
  <Image
    src={lsimages.images[3].imageLink}
    alt="Selected 3"
    fill
    className="w-32 h-32 object-contain bg-[#AEAEB2] opacity-60 rounded-none cursor-pointer"/>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-semibold text-2xl">
    + {lsimages.images.length - 3}
  </div>
</div>
  );

  return (
    <div className=" flex gap-4 bg-background-color w-full rounded-lg my-4">
      <div>
        <div className="flex space-x-2">
          <Icon
            className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
            name={isShow ? "angle-down" : "angle-right"}
            onClick={handleChangeIsShow}
          />
          <p className="font-semibold text-text-color my-auto">Sự cố</p>
        </div>
        {isShow && (
        <div className="list-picture flex gap-10 mx-3 py-3 relative">
          <div className=" ml-3 flex gap-2">
          {
            lsimages.images
            .slice(0, 3)
            .map((image, index) => (
             (
                <Image
                key={index}
                src={image.imageLink}
                alt={`Selected ${index}`}
                width={200}
                height={200}
                className="w-32 h-32 object-cover rounded-none cursor-pointer"
                onClick={() => openLightbox(image.imageLink, index)}
              />)
            ))
          }
          {image4}
          </div>
          <TextField
          className=" w-120"
          id="outlined-multiline-static"
          label="Nội dung sự cố"
          multiline
          rows={4}
          value="abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgh"
          disabled
        />
        </div>
      )}
      {selectedImage && (
        <ModalImage
          imageUrl={selectedImage}
          onClose={closeLightbox}
          onNext={() => changeImage("next")}
          onPrev={() => changeImage("prev")}
          currentIndex={currentImageIndex}
          totalImages={lsimages.images.length}
        />
      )}
      </div>
    </div>
  );
}
