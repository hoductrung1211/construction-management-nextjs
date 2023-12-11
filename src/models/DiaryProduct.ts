export interface IDairyProduct {
  planTaskProductId: number;
  mdProduct: {
    productid: number;
    productname: string;
    mdQuantityUnit: {
      quantityunitid: number;
      quantityunitname: string;
    };
  };
}
