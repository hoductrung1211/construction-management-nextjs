import IProduct from "./Product";

export default interface ICostEstimateTaskProduct {
    costestimatetaskproductid: number;
    productamount: number;
    mdProduct: IProduct;
}