import IPlanTaskDiary from "@/models/PlanTaskDiary";
import request from "./request";
import { IDiaryEmployee } from "@/models/DiaryEmployee";
import { IDiaryProduct } from "@/models/DiaryProduct";

const planTaskAPI = {
  getList: (constructionid: any) =>
    request.get<IPlanTaskDiary[]>(`/plantask?constructionid=${constructionid}`),
  getPlanTask: (plantaskid: any) =>
    request.get<IPlanTaskDiary[]>(`/plantask?plantaskid=${plantaskid}`),
  getLabor: (plantaskid: any) =>
    request.get<IDiaryEmployee[]>(`/plantasklabor/${plantaskid}`),
  getProduct: (plantaskid: any) =>
    request.get<IDiaryProduct[]>(`/plantaskproduct/${plantaskid}`),
};

export default planTaskAPI;