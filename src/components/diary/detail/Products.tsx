"use client"
export interface IProduct {
    no: number;
  pdId: string;
  pdName: string;
  pdUnit: string;
  pdAmount: number;
}

export default function Products({ product }: { product: IProduct }) {
  const { pdId, pdName, pdUnit, pdAmount } = product;
  return(
    <div className=" flex justify-between mx-9 my-2 items-center"
          >
            <p className=" w-3">{product.no}</p>
            <p className=" w-14">{product.pdId}</p>
            <p className=" w-60">{product.pdName}</p>
            <p className=" w-10">{product.pdUnit}</p>
            <p className=" w-10">{product.pdAmount}</p>
          </div>
  )
}
