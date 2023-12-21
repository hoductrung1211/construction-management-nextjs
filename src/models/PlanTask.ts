export default interface IPlanTask {
    amountofwork: number;

    costestimateid: number;
    orderindex: number;
    planid: number;
    plantaskid: number;

    startdate: string;
    enddate: string;

    quantityunitid: number;
    quantityunitname: string;

    taskid: number;
    taskcode: string;
    taskname: string;

    totallaborquantity: number;

    workitemid: number;
    workitemcode: string;
    workitemname: string;
}