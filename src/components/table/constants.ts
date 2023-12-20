import { Order } from "@/utils/functions/sort";

export interface IEnhancedTableProps<TData> { 
    order: Order;
    orderBy: string;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TData) => void;
    headCells: {
        id: keyof TData;
        label: string;
        numeric: boolean; // to align
        width?: string;
    }[]
}

export interface IHeadCell<TData> {
    id: keyof TData;
    label: string;
    numeric: boolean; 
    width?: string;
}