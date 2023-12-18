import FieldValue from "@/components/FieldValue";
import ICostEstimate from "@/models/CostEstimate";

export interface ICostEstimateInfoSectionProps {
    costEstimateInfo: ICostEstimate
}

export default function CostEstimateInfoSection({
    costEstimateInfo: {
        costestimatecode: costEstimateCode,
        costestimatename: costEstimateName,
    }
}: ICostEstimateInfoSectionProps) {
    return (
        <section className="col-span-1 flex flex-col gap-4">
            <FieldValue label="Dự toán">
              #{costEstimateCode} {costEstimateName} 
            </FieldValue>
            <FieldValue label="Người tạo">
                {/* {creator} */}
            </FieldValue>
            <FieldValue label="Thời gian tạo">
                {/* {createdTime} */}
            </FieldValue>
            <FieldValue label="Tổng số hạng mục">
                {/* {totalWorkItems} */}
            </FieldValue> 
            <FieldValue label="Tổng chi phí">
              {/* <span className="font-bold text-lg text-orange-500">{totalCost.toLocaleString("en-gb")} VND</span> */}
            </FieldValue> 
        </section>
    )
}