import FieldValue from "@/components/FieldValue";
import { IContructionSite } from "@/models/ConstructionSite";

export default function ConstructionSiteDetail({
    constructionSite: {
        constructionCode,
        constructionName,
        address,
        brand,

        startDate,
        endDate,
        
        creator,
        createdTime
    }
}: {
    constructionSite: IContructionSite
}) {
    return (
        <div className="col-span-1 flex flex-col gap-4">
            <FieldValue label="Công trình">
                {constructionCode} {constructionName}
            </FieldValue>
            <FieldValue label="Địa chỉ">
                {address}
            </FieldValue>
            <FieldValue label="Ngày dự kiến bắt đầu">
                {startDate.toDateString()}
            </FieldValue>
            <FieldValue label="Ngày dự kiến kết thúc">
                {endDate.toDateString()}
            </FieldValue>
            <FieldValue label="Thương hiệu công ty">
                {brand}
            </FieldValue>
            <FieldValue label="Người tạo">
                {creator}
            </FieldValue>
            <FieldValue label="Thời gian tạo">
                {createdTime.toLocaleTimeString()}
            </FieldValue>
        </div>
    )
}