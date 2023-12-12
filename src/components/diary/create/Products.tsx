import { IDairyProduct } from "@/models/DiaryProduct";
import Icon from "../../Icon";

export interface IProduct {
  no: number;
  pdId: string;
  pdName: string;
  pdUnit: string;
  pdAmount: number;
}

export default function Products({
  product,
  no,
  handleRemoveProduct,
}: {
  product: IDairyProduct;
  no: number;
  handleRemoveProduct: (idx: number) => void;
}) {
  return (
    <div className=" flex justify-between mx-9 my-2 items-center">
      <p className=" w-3">{no}</p>
      <p className=" w-14">{product.mdProduct.productid}</p>
      <p className=" w-64">{product.mdProduct.productname}</p>
      <p className=" w-64">
        {product.mdProduct.mdQuantityUnit.quantityunitname}
      </p>
      <div className="w-40">
        <input
          type="number"
          id="number-input"
          aria-describedby="helper-text-explanation"
          className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <span className=" w-2 mr-2 cursor-pointer" onClick={() => handleRemoveProduct(product.mdProduct.productid)}>
        <Icon size="lg" className="text-text-color" name="xmark" />
      </span>
    </div>
  );
}
