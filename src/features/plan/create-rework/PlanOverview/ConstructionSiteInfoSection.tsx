import FieldValue from "@/components/FieldValue";
import IConstructionSite from "@/models/ConstructionSite";
import { getVNLocaleDateString } from "@/utils/functions/getLocaleDateString";

export interface IConstructionSiteInfoSectionProps {
    constructionSiteInfo: IConstructionSite
}

export default function ConstructionSiteInfoSection({
    constructionSiteInfo: {
        constructionsitecode: constructionCode,
        constructionsitename: constructionName,
        address,
        startdate: startDate,
        enddate: endDate,
        mdConstructionType: constructionType,
        mdEmployee: creator,
    }
}: IConstructionSiteInfoSectionProps) {
    return (
        <section className="col-span-1 flex flex-col gap-4">
            <FieldValue label="Công trình">
                #{constructionCode} {constructionName}
            </FieldValue>
            <FieldValue label="Địa chỉ">
                {address}
            </FieldValue>
            <FieldValue label="Ngày dự kiến bắt đầu">
                {getVNLocaleDateString(startDate)}
            </FieldValue>
            <FieldValue label="Ngày dự kiến kết thúc">
                {getVNLocaleDateString(endDate)}
            </FieldValue>
            <FieldValue label="Thương hiệu công ty">
                {constructionType.mdBrand.brandname}
            </FieldValue>
            <FieldValue label="Người tạo">
                {creator.firstname + " " + creator.lastname}
            </FieldValue>
            <FieldValue label="Thời gian tạo">
                {/* {createdDate} */}
            </FieldValue>
        </section>
    )
}