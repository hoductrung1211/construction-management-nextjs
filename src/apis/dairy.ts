import { IWeather } from "@/models/Weather";
import request from "./request";
import { IShift } from "@/models/Shift";
import IProgress from "@/models/Progress";
import IDiary from "@/models/Diary";
import IDiaryCreate from "@/models/DiaryCreate";


const diaryApi =  {
    getWeather: () => request.get<IWeather[]>(`diary/weathers`),
    getListAllDiaries: (id:number) => request.get<IDiary[]>(`diary?id=${id}`),
    getDiary:(id:number) => request.get<IDiary[]>(`diary/search?diaryid=${id}`),
    getListAllDiariesByConstructionSite: (constructionid:number) => request.get<IDiary[]>(`diary/search?constructionid=${constructionid}`),
    getShift:() => request.get<IShift[]>(`diary/shifts`),
    getProgressInfo: (plantaskid: number) => request.get<IProgress>(`diary/progress?plantaskid=${plantaskid}`),
    saveDiary: (diary: IDiaryCreate) => request.post<String>(`diary/save`, diary),
}

export default diaryApi;