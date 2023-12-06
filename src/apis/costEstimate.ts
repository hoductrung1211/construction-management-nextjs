import CostEstimate from "@/models/CostEstimate";
import request from "./request";
import CostestimateWorkitem from "@/models/CostEstimateWorkitem";

// interface ICostEstimateOveview {}

// interface ICostEstimate extends ICostEstimateOverview {
//   workitems: {};
// }

const APICostEstimate = {
  getListCodeAndName: (idCostEstimate: Number) =>
    request.get<CostEstimate[]>(
      `/costestimate/getcodeandname/${idCostEstimate}`
    ),
  getById: (id: Number) => request.get<CostEstimate>(`/costestimate/${id}`),
  getListCostEstimateTasks: (idCostestimate: Number) =>
    request.get<CostestimateWorkitem[]>(
      `/costestimatetask/getlistbycostestimateid/${idCostestimate}`
    ),
};

export default APICostEstimate;
