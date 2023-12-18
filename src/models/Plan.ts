export default interface IPlan {
    planidcode: string;
    
    planname: string;
    startdate: string;
    enddate: string;
    
    mdConstructionSite: number;
    mdEmployee: number;
    approvers: number[];
}