"use client";

import Icon from "../Icon";

export default function ListPicture() {
  return (
    <div className=" mt-4 bg-background-color w-full rounded-t-lg">
      <div className="flex gap-20 mx-10 justify-between">
        <div className=" flex space-x-2">
          <Icon className="text-text-color" name="chevron-down" />
          <p className="font-semibold text-text-color">
            Hình ảnh<span className="ml-4 font-thin">5</span>
          </p>
        </div>
        <div>
          <Icon name="plus" size="lg" className="text-text-color" />
        </div>
      </div>
    </div>
  );
}
