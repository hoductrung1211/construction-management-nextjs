"use client";

import { IDiaryProductDetail } from "@/models/DiaryProduct";

export default function Products({ product, no }: { product: IDiaryProductDetail, no: number }) {
  return(
    <div className=" flex justify-between mx-9 my-2 items-center"
          >
            <p className=" w-3">{no}</p>
            <p className=" w-14">{product.mdProduct.productid}</p>
            <p className=" w-60">{product.mdProduct.productname}</p>
            <p className=" w-10">{product.mdProduct.mdQuantityUnit.quantityunitname}</p>
            <p className=" w-10">{product.consumptionamount}</p>
          </div>
  )
}
