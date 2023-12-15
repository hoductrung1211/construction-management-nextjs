import IQuantityUnit from "./QuantityUnit";

export default interface IProduct {
    productid: number;
    productname: string;
    mdQuantityUnit: IQuantityUnit;
}
