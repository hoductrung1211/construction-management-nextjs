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