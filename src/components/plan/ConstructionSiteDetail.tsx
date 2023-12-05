import FieldValue from "@/components/FieldValue";

export interface ICSDetailProps {
    csId: string;
    csName: string;
    address: string;
    startDate: Date;
    endDate: Date;
    brand: string;
    creator: string;
    createdTime: Date;
}

export default function ConstructionSiteDetail({
    csInfo: {
        csId,
        csName,
        address,
        startDate,
        endDate,
        brand,
        creator,
        createdTime
    }
}: {
    csInfo: ICSDetailProps
}) {
    return (
        <div className="col-span-1 flex flex-col gap-4">
            <FieldValue label="Công trình">
                {csId} {csName}
            </FieldValue>
            <FieldValue label="Địa chỉ">
                {address}
            </FieldValue>
            <FieldValue label="Ngày dự kiến bắt đầu">
                {/* {startDate.toDateString()} */}
            </FieldValue>
            <FieldValue label="Ngày dự kiến kết thúc">
                {/* {endDate.toDateString()} */}
            </FieldValue>
            <FieldValue label="Thương hiệu công ty">
                {brand}
            </FieldValue>
            <FieldValue label="Người tạo">
                {creator}
            </FieldValue>
            <FieldValue label="Thời gian tạo">
                {createdTime.toLocaleTimeString("en-US")}
            </FieldValue>
        </div>
    )
}