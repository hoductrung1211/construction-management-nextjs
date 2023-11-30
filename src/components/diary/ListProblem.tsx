"use client";

import Icon from "../Icon";

export default function ListProblem() {
  return (
    <div className=" mt-4 bg-background-color w-full rounded-t-lg">
      <div className="flex gap-20 mx-10 justify-between">
        <div className=" flex space-x-2">
          <Icon className="text-text-color" name="chevron-down" />
          <p className="font-semibold text-text-color">
            Sự cố
          </p>
        </div>
        <div>
          <Icon name="plus" size="lg" className="text-text-color" />
        </div>
      </div>
    </div>
  );
}
