import React, { useState } from "react";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Icon from "@/components/Icon";

export interface IImages {
  imageId: string;
  diaryId: string;
  imageName: string;
  imageType: string;
  imageLink: string;
}

export interface IImagesList {
  images: IImages[];
}

export const ModalImage = ({
  imageUrl,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}: {
  imageUrl: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
}) => {
  return (
    <Modal
      open={!!imageUrl}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className=" w-3/5 h-3/5 rounded-md relative overflow-hidden border-none bg-slate-100">
        <div className="relative flex items-center justify-center h-full w-full">
          <Icon
            size="xl"
            className=" absolute rounded-none top-2 right-2  hover:rounded-none bg-opacity-0  text-apple-gray hover: cursor-pointer"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            name="xmark"
          ></Icon>
          <Icon
            name="chevron-left"
            onClick={onPrev}
            className=" absolute left-5 z-[1] text-apple-gray cursor-pointer"
            aria-label="previous"
          />
          <Image
            src={imageUrl}
            alt="Selected Image"
            width={200}
            height={200}
            className="w-full h-full block object-contain"
          />
          <Icon
            name="chevron-right"
            onClick={onNext}
            className=" absolute right-5 z-[1] text-apple-gray cursor-pointer"
            aria-label="next"
          />
        </div>
      </Box>
    </Modal>
  );
};

export default function ListPicture({ lsimages }: { lsimages: IImagesList }) {
  const [isShow, setIsShow] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChangeIsShow = () => {
    setIsShow(!isShow);
  };

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
    <div className="bg-background-color w-full rounded-lg my-4">
      <div className="flex space-x-2">
        <Icon
          className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
          name={isShow ? "angle-down" : "angle-right"}
          onClick={handleChangeIsShow}
        />
        <p className="font-semibold text-text-color my-auto">Hình ảnh</p>
      </div>
      {isShow && (
        <div className="list-picture flex gap-2 mx-3 py-3 relative">
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
  );
}
