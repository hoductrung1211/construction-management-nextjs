import IProduct from "./Product";

export interface IDiaryProduct {
  planTaskProductId: number;
  mdProduct: {
    productid: number;
    productname: string;
    mdQuantityUnit: {
      quantityunitid: number;
      quantityunitname: string;
    };
  };
  consumptionAmount?: number;
}

export interface IDiaryProductDetail{
  diarytaskproductid: number,
  consumptionamount: number,
  mdProduct: IProduct,
}
