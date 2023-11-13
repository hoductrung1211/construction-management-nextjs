import { Order } from "@/utils/functions/sort";
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';


interface EnhancedTableProps<TData> {
    numSelected: number;
    rowCount: number;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TData) => void;
    headCells: {
        id: keyof TData;
        label: string;
        numeric: boolean; // to align
        disablePadding: boolean;
        width?: string;
    }[]
}

export default function EnhancedTableHead<TData>({
    numSelected,
    rowCount,
    onSelectAllClick,
    order,
    orderBy,
    onRequestSort,
    headCells
}: EnhancedTableProps<TData>) {

    const createSortHandler =
        (property: keyof TData) =>
        (event: React.MouseEvent<unknown>) =>
        {
            onRequestSort(event, property);
        }

    return (
        <TableHead>
            <TableRow> 
                {headCells.map(headCell => (
                    <TableCell key={headCell.id.toString()}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        width={headCell?.width ?? "inherit"}
                        // sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc" ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ): null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}