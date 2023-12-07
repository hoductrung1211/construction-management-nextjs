import FieldValue from "@/components/FieldValue";
import { ICostEstimate } from "@/models/CostEstimate";
import { getVNLocaleDateString } from "@/utils/functions/getLocaleDateString";
 
export default function CostEstimateDetail({
    costEstimate: {
        costestimatecode: costEstimateCode,
        costestimatename: costEstimateName,
        creator,
        createddate: createdTime,
        totalCost,
        totalWorkItems
    }
}: {
    costEstimate: ICostEstimate
}) {
    return (
        <div className="col-span-1 flex flex-col gap-4">
            <FieldValue label="Dự toán">
              {costEstimateCode} {costEstimateName} 
            </FieldValue>
            <FieldValue label="Người tạo">
                {creator}
            </FieldValue>
            <FieldValue label="Thời gian tạo">
                {getVNLocaleDateString(createdTime.toDateString())}
            </FieldValue>
            <FieldValue label="Tổng số hạng mục">
                {totalWorkItems}
            </FieldValue> 
            <FieldValue label="Tổng chi phí">
              <span className="font-bold text-lg text-orange-500">{totalCost.toLocaleString("en-Us")} VND</span>
            </FieldValue> 
        </div>
    )
}