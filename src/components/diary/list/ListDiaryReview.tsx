"use client";

import dairyApi from "@/apis/dairy";
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
            const lsDiariesRecent: IDiary[] = (await dairyApi.getListAllDiariesByConstructionSite(filterValue)) || [];
            setListDiariesReview(lsDiariesRecent);
        }
        else{
            const lsDiariesRecent: IDiary[] = (await dairyApi.getListAllDiaries(2)) || [];
            setListDiariesReview(lsDiariesRecent);
        }
        
      };
    
      React.useEffect(() => {
        fetchInitialData();
      }, []);



      async function handleChangeFilter(value: number) {
        setFilterValue(value);
        const lsDiariesRecent: IDiary[] = (await dairyApi.getListAllDiariesByConstructionSite(value)) || [];
            setListDiariesReview(lsDiariesRecent);
      }
    return(
        <div>
            <FilterDiary value={filterValue} onChangeCS={handleChangeFilter}/>
            <ListDiaries lsDiaries={listDiariesReview}/>
        </div>
    )
    
}
