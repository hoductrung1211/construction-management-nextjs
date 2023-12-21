import ICostEstimate from "@/models/CostEstimate";
import request from "./request";
import ICostEstimateWorkItem from "@/models/CostEstimateWorkItem";
import ICostEstimateTaskProduct from "@/models/CostEstimateTaskProduct";

const costEstimateAPI = {
    getListCodeAndName: (constructionSiteId: number) =>
        request.get<ICostEstimate[]>(
            `/costestimate/getcodeandname/${constructionSiteId}`
        ),
    
    getById: (costEstimateId: number) =>
        request.get<ICostEstimate>(`/costestimate/${costEstimateId}`),
    
    getListCostEstimateTasks: (costEstimateId: number) =>
        request.get<ICostEstimateWorkItem[]>(
            `/costestimatetask/getlistbycostestimateid/${costEstimateId}`
        ),
    
    getListCostEstimateTaskProducts: (costEstimateTaskId: number) =>
        request.get<ICostEstimateTaskProduct[]>(`costestimatetaskproduct/getlistbycostestimatetaskid/${costEstimateTaskId}`),
};

export default costEstimateAPI;
