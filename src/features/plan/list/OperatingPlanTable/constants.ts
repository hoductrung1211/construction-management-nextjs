export interface IPlanData {
    construction: string; // construction ID + construction Name
    plan: string; // plan ID + plan Name
    startDate: string;
    endDate: string;
    createdTime: string;
}

export interface IHeadCell {
    id: keyof IPlanData;
    label: string;
    numeric: boolean;
    disablePadding: boolean;
    width?: string;
}

export const headCells: IHeadCell[] = [
    {
        id: "construction",
        numeric: false,
        disablePadding: false,
        label: "Công trình",
    },
    {
        id: "plan",
        numeric: false,
        disablePadding: false,
        label: "Kế hoạch",
    },
    {
        id: "startDate",
        numeric: false,
        disablePadding: false,
        label: "Ngày bắt đầu",
    },
    {
        id: "endDate",
        numeric: false,
        disablePadding: false,
        label: "Ngày kết thúc",
    },
    {
        id: "createdTime",
        numeric: false,
        disablePadding: false,
        label: "Ngày tạo",
    },
]