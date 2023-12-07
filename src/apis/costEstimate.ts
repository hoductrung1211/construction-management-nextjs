import ICostEstimate from "@/models/CostEstimate";
import request from "./request";
import ICostEstimateWorkItem from "@/models/CostEstimateWorkItem";

const costEstimateAPI = {
    getListCodeAndName: (constructionSiteId: number) =>
        request.get<ICostEstimateWorkItem[]>(
            `/costestimate/getcodeandname/${constructionSiteId}`
        ),
    
    getById: (costEstimateId: number) =>
        request.get<ICostEstimate>(`/costestimate/${costEstimateId}`),
    
    getListCostEstimateTasks: (costEstimateId: number) =>
        request.get<ICostEstimateWorkItem[]>(
            `/costestimatetask/getlistbycostestimateid/${costEstimateId}`
        ),
};

export default costEstimateAPI;
