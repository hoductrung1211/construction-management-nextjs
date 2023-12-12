import { IWeather } from "@/models/Weather";
import request from "./request";

const dairyApi =  {
    getWeather: () => request.get<IWeather[]>(`diary/weathers`),
}

export default dairyApi;