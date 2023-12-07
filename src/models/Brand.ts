export default interface IBrand {
    brandid: number;
    brandname: string;
    mdCompany: ICompany;
}

export interface ICompany {
    companyid: number;
    companyaddress: string;
    companyname: string;
}