import ICostEstimateTaskProduct from "@/models/CostEstimateTaskProduct";
// TODO: Finished this
export default function TaskProductSection({
    products
}: {
    products: ICostEstimateTaskProduct[];
}) {
    return (
        <>
            <div className="flex-shrink-0 h-14 px-6 flex justify-between items-center bg-apple-gray-6">
                <p>
                    <span className="font-bold">Tổng số vật tư</span> {products.length}
                </p>
            </div>
            <div className="h-full p-2 flex flex-col gap-2 overflow-auto ">
                {products.map((product, idx) => (
                    <div className="flex-shrink-0 h-20 grid grid-cols-4 items-center rounded-md hover:bg-apple-gray-6">
                        <div className="pl-3">{idx + 1}</div>
                        <div>
                            <span className="text-apple-gray">
                                {"#" + product.mdProduct.productid}
                            </span>
                            {" "}
                            <span className="font-semibold">
                                {product.mdProduct.productname}
                            </span>
                        </div>
                        <div>{product.mdProduct.mdQuantityUnit.quantityunitname}</div>
                        <div>{product.productamount}</div>
                    </div>
                ))}
            </div>
        </>
    )
}