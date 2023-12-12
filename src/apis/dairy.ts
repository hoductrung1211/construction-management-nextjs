import { IWeather } from "@/models/Weather";
import request from "./request";
import { IShift } from "@/models/Shift";
import IProgress from "@/models/Progress";

const dairyApi =  {
    getWeather: () => request.get<IWeather[]>(`diary/weathers`),
    getShift:() => request.get<IShift[]>(`diary/shifts`),
    getProgressInfo: (plantaskid: number) => request.get<IProgress>(`diary/progress?plantaskid=${plantaskid}`),
}

export default dairyApi;