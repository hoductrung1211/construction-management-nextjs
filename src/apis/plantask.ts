import IPlanTaskDiary from "@/models/PlanTaskDiary";
import request from "./request";
import { IDairyEmployee } from "@/models/DiaryEmployee";
import { IDairyProduct } from "@/models/DiaryProduct";

const planTaskAPI = {
  getList: (constructionid: any) =>
    request.get<IPlanTaskDiary[]>(`/plantask?constructionid=${constructionid}`),
  getPlanTask: (plantaskid: any) =>
    request.get<IPlanTaskDiary[]>(`/plantask?plantaskid=${plantaskid}`),
  getLabor: (plantaskid: any) =>
    request.get<IDairyEmployee[]>(`/plantasklabor/${plantaskid}`),
  getProduct: (plantaskid: any) =>
    request.get<IDairyProduct[]>(`/plantaskproduct/${plantaskid}`),
};

export default planTaskAPI;
