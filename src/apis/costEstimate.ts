import CostEstimate from "@/models/CostEstimate";
import request from "./request";

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
};

export default APICostEstimate;
