"use client";

import Icon from "@/components/Icon";


export default function PageNumber(){
    return(
        <div className="grid justify-items-end py-5">
            <div className=" flex w-80 justify-between mx-4">
                <p>Trang</p>
                <p>15</p>
                <p>1-15/250</p>
                <span>
                    <Icon size="lg" className="text-text-color hover:text-black" name="chevron-left"/>
                </span>
                <span>
                    <Icon size="lg" className="text-text-color hover:text-black" name="chevron-right"/>
                </span>
            </div>
        </div>
    )
}