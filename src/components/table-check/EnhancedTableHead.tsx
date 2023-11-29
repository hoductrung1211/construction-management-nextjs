import { Order } from "@/utils/functions/sort";
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';


export interface Data {
    id: number;
    title: string;
    numberOfPosition: number;
    department: string;
    reason: string;
    status: string;
    createdTime: string;
}


interface HeadCell {
    id: keyof Data;
    label: string;
    numeric: boolean; // to align
    disablePadding: boolean;
    width?: string;
}

const headCells: readonly HeadCell[] = [
    {
        id: "title",
        numeric: false,
        disablePadding: true,
        label: "Title",
        width: "45%"
    },
    {
        id: "numberOfPosition",
        numeric: true,
        disablePadding: false,
        label: "Number Of Position",
        width: "15%"
    },
    {
        id: "department",
        numeric: false,
        disablePadding: false,
        label: "Department",
        width: "10%"
    },
    {
        id: "reason",
        numeric: false,
        disablePadding: false,
        label: "Reason",
        width: "20%"
    },
    {
        id: "status",
        numeric: false,
        disablePadding: false,
        label: "Status",
        width: "5%"
    },
    {
        id: "createdTime",
        numeric: true,
        disablePadding: false,
        label: "Created Time",
        width: "10%"
    },
];



interface EnhancedTableProps {
    numSelected: number;
    rowCount: number;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
}

export default function EnhancedTableHead({
    numSelected,
    rowCount,
    onSelectAllClick,
    order,
    orderBy,
    onRequestSort
}: EnhancedTableProps) {

    const createSortHandler =
        (property: keyof Data) =>
        (event: React.MouseEvent<unknown>) =>
        {
            onRequestSort(event, property);
        }

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                
                {headCells.map(headCell => (
                    <TableCell key={headCell.id}
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