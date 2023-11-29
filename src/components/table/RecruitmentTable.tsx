'use client';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import React, { useMemo, useState } from "react";
import EnhancedTableHead from "./EnhancedTableHead";
import { Order, getComparator, stableSort } from "@/utils/functions/sort";
import Link from "next/link";

interface Data {
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

const headCells: HeadCell[] = [
    {
        id: "title",
        numeric: false,
        disablePadding: false,
        label: "Title",
        width: "40%"
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
        width: "15%"
    },
];

function createData(
    id: number,
    title: string,
    numberOfPosition: number,
    department: string,
    reason: string,
    status: string,
    createdTime: string,
): Data {
    return {
        id, 
        title,
        numberOfPosition,
        department,
        reason,
        status,
        createdTime,
    }
}

const rows = [
    createData(1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui expedita, autem explicabo corrupti ut. Minima, accusantium voluptate! Rem delectus obcaecati quod eveniet magnam porro saepe quis, repellat odio? Tenetur!', 1, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(2, 'Title2', 2, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(3, 'Title3', 3, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(4, 'Title4', 2, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(5, 'Title5', 1, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(6, 'Title1', 1, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(7, 'Title2', 2, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(8, 'Title3', 3, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(9, 'Title4', 2, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(10, 'Title5', 1, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(11, 'Title1', 1, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(12, 'Title2', 2, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(13, 'Title3', 3, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(14, 'Title4', 2, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(15, 'Title5', 1, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(16, 'Title1', 1, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(17, 'Title2', 2, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(18, 'Title3', 3, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(19, 'Title4', 2, 'IT', 'Grow up', 'active', '12-11-2023'),
    createData(20, 'Title5', 1, 'IT', 'Grow up', 'active', '12-11-2023'),
]

export default function RecruitmentTable() {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Data>('title');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);

    // HEAD HEAD HEAD HEAD HEAD
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map(n => n.id);
            setSelected(newSelected);
        }
        else {
            setSelected([]);
        }
    };

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    }
    // HEAD HEAD HEAD HEAD HEAD



    // BODY BODY BODY BODY BODY
    const visibleRows = useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
        ),
        [order, orderBy, page, rowsPerPage],
    );

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
    
        setSelected(newSelected);
    };
    // BODY BODY BODY BODY BODY
    

    
    // FOOT FOOT FOOT FOOT FOOT
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    // FOOT FOOT FOOT FOOT FOOT

    return (
        <main className="h-full flex flex-col rounded-lg bg-default">
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer sx={{ maxHeight: 520 }}>
                <Table stickyHeader aria-label="sticky table" className="h-full">
                    <EnhancedTableHead
                        numSelected={selected.length}
                        rowCount={rows.length}
                        onSelectAllClick={handleSelectAllClick}
                        orderBy={orderBy}
                        order={order}
                        onRequestSort={handleRequestSort}
                        headCells={headCells}
                    />

                    <TableBody>
                        {visibleRows.map((row, index) => {
                            const isItemSelected = isSelected(row.id);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow hover>
                                    <TableCell
                                        component="th"
                                        id={labelId}
                                        scope="row"
                                    >
                                        <Link href={`recruitments/${row.id}/review`}>{row.title}</Link>
                                    </TableCell>
                                    <TableCell align="right">{row.numberOfPosition}</TableCell>
                                    <TableCell align="left">{row.department}</TableCell>
                                    <TableCell align="left">{row.reason}</TableCell>
                                    <TableCell align="left">{row.status}</TableCell>
                                    <TableCell align="right">{row.createdTime}</TableCell>
                                </TableRow>
                            )
                    })}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </main>
    )
}
