export interface ICostEstimate {
    costEstimateCode: string;
    costEstimateName: string;
    
    // metadata
    creator: string;
    createdTime: Date;
    
    // report
    totalWorkItems: number;
    totalCost: number;
}

export const initCEInfo: ICostEstimate = {
    costEstimateCode: "#CE2541",
    costEstimateName: "Thegioididong",

    creator: "Ho Duc Trung",
    createdTime: new Date(2024, 11, 20),
    
    totalWorkItems: 10,
    totalCost: 2_220_400_000,
}