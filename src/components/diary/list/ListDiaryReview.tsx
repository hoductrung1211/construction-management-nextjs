"use client";

import diaryApi, { DiaryListType } from "@/apis/diary";
import { useState } from "react";
import FilterDiary from "./FilterDiary";
import ListDiaries from "./ListDiaries";
import React from "react";
import IDiary from "@/models/Diary";

export default function ListDiaryReview(){
    const [filterValue, setFilterValue] = useState(0)
    const [listDiariesReview, setListDiariesReview] = React.useState<IDiary[]>(
        []
      );

    const fetchInitialData = async () => {
        if(filterValue != 0){
            const lsDiariesRecent: IDiary[] = (await diaryApi.getListAllDiariesByConstructionSite(filterValue, DiaryListType.Waiting)) || [];
            setListDiariesReview(lsDiariesRecent);
        }
        else{
            const lsDiariesRecent: IDiary[] = (await diaryApi.getListAllDiaries(2)) || [];
            setListDiariesReview(lsDiariesRecent);
        }
        
      };
    
      React.useEffect(() => {
        fetchInitialData();
      }, []);



      async function handleChangeFilter(value: number) {
        setFilterValue(value);
        const lsDiariesRecent: IDiary[] = (await diaryApi.getListAllDiariesByConstructionSite(value, DiaryListType.Waiting)) || [];
            setListDiariesReview(lsDiariesRecent);
      }
    return(
        <div>
            <FilterDiary value={filterValue} onChangeCS={handleChangeFilter}/>
            <ListDiaries lsDiaries={listDiariesReview}/>
        </div>
    )
    
}
