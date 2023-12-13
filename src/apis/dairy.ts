import { IWeather } from "@/models/Weather";
import request from "./request";
import { IShift } from "@/models/Shift";
import IProgress from "@/models/Progress";
import IDiary from "@/models/Diary";

const dairyApi =  {
    getWeather: () => request.get<IWeather[]>(`diary/weathers`),
    getListDiaries: (id:number) => request.get<IDiary[]>(`diary?id=${id}`),
    getShift:() => request.get<IShift[]>(`diary/shifts`),
    getProgressInfo: (plantaskid: number) => request.get<IProgress>(`diary/progress?plantaskid=${plantaskid}`),
}

export default dairyApi;