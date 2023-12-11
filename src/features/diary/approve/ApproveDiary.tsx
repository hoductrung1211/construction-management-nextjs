import DiaryInfo from "@/components/diary/approve/DiaryInfo";
import DetailTitle from "@/components/diary/detail/DetailTitle";
import ListLaborsDiary, { ILaborList } from "@/components/diary/detail/ListLaborsDiary";
import ListPicture, { IImagesList } from "@/components/diary/detail/ListPicture";
import ListProductsDiary, { IProductList } from "@/components/diary/detail/ListProductsDiary";
import { useState } from "react";

export default function DetailDiary(){
    
    return(
        <div className=" bg-background-color">
           <DiaryInfo/>
        </div>
    )
}

