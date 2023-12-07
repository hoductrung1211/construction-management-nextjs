import FieldValue from "@/components/FieldValue";
import { IContructionSite } from "@/models/ConstructionSite";
import { getVNLocaleDateString } from "@/utils/functions/getLocaleDateString";

export default function ConstructionSiteDetail({
    constructionSite: {
        constructionsitecode: constructionCode,
        constructionsitename: constructionName,
        address,
        brand,
        startdate: startDate,
        enddate: endDate,
        creator, // metadata
        createdtime: createdTime
    }
}: {
    constructionSite: IContructionSite
}) {
    return (
        <div className="col-span-1 flex flex-col gap-4">
            <FieldValue label="Công trình">
                #{constructionCode} {constructionName}
            </FieldValue>
            <FieldValue label="Địa chỉ">
                {address}
            </FieldValue>
            <FieldValue label="Ngày dự kiến bắt đầu">
                {getVNLocaleDateString(startDate.toDateString())}
            </FieldValue>
            <FieldValue label="Ngày dự kiến kết thúc">
                {getVNLocaleDateString(endDate.toDateString())}
            </FieldValue>
            <FieldValue label="Thương hiệu công ty">
                {brand}
            </FieldValue>
            <FieldValue label="Người tạo">
                {creator}
            </FieldValue>
            <FieldValue label="Thời gian tạo">
                {getVNLocaleDateString(createdTime.toDateString())}
            </FieldValue>
        </div>
    )
}