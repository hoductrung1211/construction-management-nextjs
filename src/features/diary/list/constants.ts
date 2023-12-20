import { IHeadCell } from "@/components/Table/constants";

export interface ICurrentDiaryData {
    diaryId: string;
    construction: string;
    diary: string;
    workItem: string;
    task: string;
    quantityUnit: string;
    amountOfConsumption: string;
    dateTime: string;
}

export const headCells: IHeadCell<ICurrentDiaryData>[] = [
    {
        id: "construction",
        numeric: false,
        label: "Công trình",
    },
    {
        id: "diary",
        numeric: false,
        label: "Nhật ký",
    },
    {
        id: "workItem",
        numeric: false,
        label: "Hạng mục",
    },
    {
        id: "task",
        numeric: true,
        label: "Công việc",
    },
    {
        id: "quantityUnit",
        numeric: true,
        label: "Đơn vị",
    },
    {
        id: "amountOfConsumption",
        numeric: true,
        label: "Khối lượng hoàn thành",
    },
    {
        id: "dateTime",
        numeric: false,
        label: "Nhật ký ngày",
    },
]