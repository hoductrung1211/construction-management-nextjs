export interface IProductCreate{
    productId: number, //1,
    consumptionAmount: number //10
}

export interface   ILaborCreate{
    laborID: number, //1
    shiftID: number,//1
}
export default interface IDiaryCreate{
    starttime: string,
    endtime: string,
    temperature: number, 
    cmsPlanTask: number, 
    creator: number,
    amountOfWork: number,
    products:IProductCreate[],
    labors:ILaborCreate[],
    pictures: File[],
    picturesProblem: File[],
    mdWeather: number,
    problem: String, 
    quantityUnit: number, 
};

// export default interface IDiary{
//     starttime: string,//"07:00:00",
//     endtime: string, //"17:30:00",
//     temperature: number, //32
//     problem: string, //"sập giàn",
//     quantityUnit: number, //1,
//     cmsPlanTask: number, // 1,
//     creator: number,//1,
//     mdWeather: number, //5,
//     amountOfWork: number, // 10,
//     products:IProduct[],
//     labors:ILabor[],
//     pictures: File[],
//     picturesProblem: File[]
// };