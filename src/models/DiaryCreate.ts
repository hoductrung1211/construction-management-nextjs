export interface IProductCreate{
    productId: number, //1,
    consumptionAmount: number//10
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
    pictures: String[],
    picturesProblem: String[],
    mdWeather: number,
    problem: String, 
    quantityUnit: number, 
    dateOfDiary: String,
}; 