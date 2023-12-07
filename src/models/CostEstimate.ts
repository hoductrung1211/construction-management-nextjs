export default interface ICostEstimate {
    costestimateid: number;
    costestimatecode: string;
    costestimatename: string;
    
    // metadata
    // creator: string;
    // createddate: string; // TODO: Fix this dateofcostestimate
    status: string;

    // report
    // totalWorkItems: number;
    // totalCost: number;
}

// export const initCEInfo: ICostEstimate = {
//     costestimatecode: "#CE2541",
//     costestimatename: "Thegioididong",

//     creator: "Ho Duc Trung",
//     createddate: new Date(2024, 11, 20),
    
//     totalWorkItems: 10,
//     totalCost: 2_220_400_000,
// }