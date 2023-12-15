"use client";

import diaryApi, { DiaryListType } from "@/apis/diary";
import { useState } from "react";
import FilterDiary from "./FilterDiary";
import ListDiaries from "./ListDiaries";
import React from "react";
import IDiary from "@/models/Diary";

export default function ListDiaryOther(){
    const [filterValue, setFilterValue] = useState(0)
    const [listDiariesOther, setListDiariesOther] = React.useState<IDiary[]>(
        []
      );

    const fetchInitialData = async () => {
        if(filterValue != 0){
            const lsDiariesRecent: IDiary[] = (await diaryApi.getListAllDiariesByConstructionSite(filterValue,DiaryListType.Others)) || [];
            setListDiariesOther(lsDiariesRecent);
        }
        else{
            const lsDiariesRecent: IDiary[] = (await diaryApi.getListAllDiaries(3)) || [];
            setListDiariesOther(lsDiariesRecent);
        }
        
      };
    
      React.useEffect(() => {
        fetchInitialData();
      }, []);



      async function handleChangeFilter(value: number) {
        setFilterValue(value);
        const lsDiariesRecent: IDiary[] = (await diaryApi.getListAllDiariesByConstructionSite(value, DiaryListType.Others)) || [];
            setListDiariesOther(lsDiariesRecent);
      }
    return(
        <div>
            <FilterDiary value={filterValue} onChangeCS={handleChangeFilter}/>
            <ListDiaries lsDiaries={listDiariesOther}/>
        </div>
    )
    
}
