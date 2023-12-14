export default interface IPlanTaskDiary {
  plantaskid?: number;
  amountofwork: number;
  enddate?: Date;
  orderindex?: number;
  startdate?: Date;
  totallaborquantity?: number;
  mdTask: {
    taskid: number;
    taskcode: string;
    taskname: string;
    mdQuantityUnit: {
      quantityunitid: number;
      quantityunitname: string;
    };
  };
  mdWorkItem: {
    workitemid: number;
    workitemCode: string;
    workitemname: string;
  };
}
