import FieldValue from "@/components/FieldValue";

export interface ICEDetailProps {
    ceId: string;
    ceName: string;
    creator: string;
    createdTime: Date;
    totalWorkItems: number;
    totalCost: number;
}

export default function CostEstimateDetail({
    ceInfo: {
        ceId,
        ceName,
        creator,
        createdTime,
        totalCost,
        totalWorkItems
    }
}: {
    ceInfo: ICEDetailProps
}) {
    return (
        <div className="col-span-1 flex flex-col gap-4">
            <FieldValue label="Dự toán">
              {ceId} {ceName} 
            </FieldValue>
            <FieldValue label="Người tạo">
                {creator}
            </FieldValue>
            <FieldValue label="Thời gian tạo">
                {createdTime.toLocaleTimeString()}
            </FieldValue>
            <FieldValue label="Tổng số hạng mục">
                {totalWorkItems}
            </FieldValue> 
            <FieldValue label="Tổng chi phí">
              <span className="font-bold text-lg text-orange-500">{totalCost.toLocaleString()} VND</span>
            </FieldValue> 
        </div>
    )
}