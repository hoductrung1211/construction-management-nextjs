"use client";
import ConstructionSiteInfo from "@/components/diary/ConstructionSiteInfo";
import ListLaborsDiary from "@/components/diary/ListLaborsDiary";
import ListPicture from "@/components/diary/ListPicture";
import ListProblem from "@/components/diary/ListProblem";
import ListProductsDiary from "@/components/diary/ListProductsDiary";

 
export default function CreateDiary() {
  return (
    <div className=" bg-background-color">
      <ConstructionSiteInfo />
      {/* <ListLaborsDiary /> */}
      <ListProductsDiary />
      <ListPicture/>
      <ListProblem/>
    </div>
  );
}
