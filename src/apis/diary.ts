import { IWeather } from "@/models/Weather";
import request from "./request";
import { IShift } from "@/models/Shift";
import IProgress from "@/models/Progress";
import IDiary from "@/models/Diary";
import IDiaryCreate from "@/models/DiaryCreate";
import { IDiaryEmployeeDetail } from "@/models/DiaryEmployee";
import { IDiaryProductDetail } from "@/models/DiaryProduct";

export const enum DiaryListType {
    Current = 3,
    WaitingConfirm = 1,
    WaitingApprove = 2,
    DenyConfirm = 4,
    DenyApprove = 5
}

const diaryApi =  {
    getWeather: () => request.get<IWeather[]>(`diary/weathers`),
    getListAllDiaries: (id:DiaryListType) => request.get<IDiary[]>(`diary?id=${id}`),
    getListAllDiariesByConstructionSite: (constructionid:number, id: DiaryListType) => request.get<IDiary[]>(`diary/search?constructionid=${constructionid}&id=${id}`),
    getShift:() => request.get<IShift[]>(`diary/shifts`),
    getProgressInfo: (plantaskid: number) => request.get<IProgress>(`diary/progress?plantaskid=${plantaskid}`),
    saveDiary: (diary: IDiaryCreate) => request.post<String>(`diary/save`, diary),
    getDiary:(id:number) => request.get<IDiary[]>(`diary/search?diaryid=${id}`),
    getLaborsDetail: (id:number) => request.get<IDiaryEmployeeDetail[]>(`diary/taskemployee/${id}`),
    getProductsDetail: (id:number) => request.get<IDiaryProductDetail[]>(`diary/taskproduct/${id}`)
}

export default diaryApi;