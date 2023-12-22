"use client"
import diaryApi from "@/apis/diary";
import DiaryInfo from "@/components/diary/confirm/DiaryInfo";
import IDiary from "@/models/Diary";
import { IDiaryEmployeeDetail } from "@/models/DiaryEmployee";
import { IDiaryProductDetail } from "@/models/DiaryProduct";
import { useState, useEffect } from "react";

export default function ConfirmDiary({ value}:{value: number}){
  const [diary, setDiary] = useState<IDiary>();
  const [labors, setLabors] = useState<IDiaryEmployeeDetail[]>([]);
  const [products, setProducts] = useState<IDiaryProductDetail[]>([]);

  const fetchDiaryDetail = async () => {
    const diary: IDiary[] = (await diaryApi.getDiary(value)) || [];
    const lsLabor: IDiaryEmployeeDetail[] = (await diaryApi.getLaborsDetail(value)) || [];
    const lsProduct: IDiaryProductDetail[] = (await diaryApi.getProductsDetail(value)) || [];
    setDiary(diary[0]);
    setLabors(lsLabor);
    setProducts(lsProduct);
  }
  useEffect(() => {fetchDiaryDetail()},[])
    
    return(
        <div className=" bg-background-color">
          {
            diary!=undefined &&
           <DiaryInfo diary={diary as IDiary} lsLabor={labors} lsProduct={products} lsFile={diary.cmsFiles}/>
          }
        </div>
    )
}
