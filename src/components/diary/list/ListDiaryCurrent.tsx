"use client";

import dairyApi, { DiaryListType } from "@/apis/dairy";
import { useState } from "react";
import FilterDiary from "./FilterDiary";
import ListDiaries from "./ListDiaries";
import React from "react";
import IDiary from "@/models/Diary";

export default function ListDiaryCurrent(){
    const [filterValue, setFilterValue] = useState(0)
    const [listDiariesResent, setListDiariesResent] = React.useState<IDiary[]>(
        []
      );

    const fetchInitialData = async () => {
        if(filterValue != 0){
            const lsDiariesRecent: IDiary[] = (await dairyApi.getListAllDiariesByConstructionSite(filterValue,DiaryListType.Current)) || [];
            setListDiariesResent(lsDiariesRecent);
        }
        else{
            const lsDiariesRecent: IDiary[] = (await dairyApi.getListAllDiaries(1)) || [];
            setListDiariesResent(lsDiariesRecent);
        }
        
      };
    
      React.useEffect(() => {
        fetchInitialData();
      }, []);



      async function handleChangeFilter(value: number) {
        setFilterValue(value);
        const lsDiariesRecent: IDiary[] = (await dairyApi.getListAllDiariesByConstructionSite(value, DiaryListType.Current)) || [];
            setListDiariesResent(lsDiariesRecent);
      }
    return(
        <div>
            <FilterDiary value={filterValue} onChangeCS={handleChangeFilter}/>
            <ListDiaries lsDiaries={listDiariesResent}/>
        </div>
    )
    
}
