export default interface IProgress{
    progressid: number;
    amountofworkdone: number;
    totalamountofworkdone: number | 0;
    cmsConstructionDiary: {
        diaryid: number;
    }
}