export default interface IPlanTaskDiary {
  plantaskid?: Number;
  amountofwork?: Number;
  enddate?: Date;
  orderindex?: Number;
  startdate?: Date;
  totallaborquantity?: Number;
  mdTask: {
    taskid: Number;
    taskcode: String;
    taskname: String;
    mdQuantityUnit: {
      quantityunitid?: Number;
      quantityunitname: String;
    };
  };
  mdWorkItem: {
    workitemid: Number;
    workitemCode: String;
    workitemname: String;
  };
}
