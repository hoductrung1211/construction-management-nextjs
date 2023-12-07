import Icon from "../Icon";

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
            <div className="w-20">
              <input
                type="number"
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <span className=" w-2 mr-2">
              <Icon size="lg" className="text-text-color" name="xmark" />
            </span>
          </div>
  )
}
