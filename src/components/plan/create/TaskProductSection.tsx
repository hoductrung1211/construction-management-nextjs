import { IProduct } from "@/models/Product";
// TODO: Finished this
export default function TaskProductSection({
    products
}: {
    products: {
        product: IProduct;
        quantity: number;
    }[];
}) {
    return (
        <>
            <div className="flex-shrink-0 h-14 px-6 flex justify-between items-center bg-apple-gray-6">
                <span className="font-bold">Tổng số nhân công</span> {products.length}
            </div>
        </>
    )
}