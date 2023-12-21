"use client";

import diaryApi, { DiaryListType } from "@/apis/diary";
import { useState } from "react";
import FilterDiary from "./FilterDiary";
import ListDiaries from "./ListDiaries";
import React from "react";
import IDiary from "@/models/Diary";
import { useRouter } from "next/navigation";

export default function ListDiaryCurrent() {
  const [filterValue, setFilterValue] = useState(0);
  const [listDiariesResent, setListDiariesResent] = React.useState<IDiary[]>(
    []
  );

  const fetchInitialData = async () => {
    if (filterValue != 0) {
      const lsDiariesRecent: IDiary[] =
        (await diaryApi.getListAllDiariesByConstructionSite(
          filterValue,
          DiaryListType.Current
        )) || [];
      setListDiariesResent(lsDiariesRecent);
    } else {
      const lsDiariesRecent: IDiary[] =
        (await diaryApi.getListAllDiaries(DiaryListType.Current)) || [];
      setListDiariesResent(lsDiariesRecent);
    }
  };

  React.useEffect(() => {
    fetchInitialData();
  }, []);

  const router = useRouter();
  const handleDoubleClick = (id: number) => {
    router.push("/construction-diaries/" + id);
  };

  async function handleChangeFilter(value: number) {
    setFilterValue(value);
    const lsDiariesRecent: IDiary[] =
      (await diaryApi.getListAllDiariesByConstructionSite(
        value,
        DiaryListType.Current
      )) || [];

    setListDiariesResent(lsDiariesRecent);
  }
  return (
    <div>
      <FilterDiary value={filterValue} onChangeCS={handleChangeFilter} />
      <ListDiaries lsDiaries={listDiariesResent} handleDoubleClick={handleDoubleClick} />
    </div>
  );
}