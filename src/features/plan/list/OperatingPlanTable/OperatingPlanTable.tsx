"use client";
import EnhancedTableHead from "@/components/Table/EnhancedTableHead";
import TableLayout from "@/components/Table/TableLayout";
import { Order } from "@/utils/functions/sort";
import { Table, TableContainer, TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import { IPlanData, headCells } from "../constants";
import PlanTableToolbar from "../PlanTableToolbar";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import useAlert from "@/hooks/useAlert";
import TableRow from "@/components/Table/TableRow";

export default function OperatingPlanTable() {
	// set up page
	const setLoading = useLoadingAnimation();
	const setAlert = useAlert();

	// Data
	const [rows, setRows] = useState<IPlanData[]>([]);
	const [filteredRows, setFilteredRows] = useState<IPlanData[]>([]);
	const [selectedCS, setSelectedCS] = useState("");

	// <EnhancedTableHead />
	const [order, setOrder] = useState<Order>('desc');
	const [orderBy, setOrderBy] = useState<keyof IPlanData>('plan');
	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof IPlanData,
	) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	}

	// <TablePagination />
	const [rowsPerPage, setRowsPerPage] = useState(15);
	const [page, setPage] = useState(0);
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};
	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	useEffect(() => {
		fetchRecentDiaries();
	}, []);

	async function fetchRecentDiaries() {
		setLoading(true);
		try {

		}
		catch (ex) {
			setAlert({
				message: "Lấy dữ liệu danh sách Kế hoạch thất bại!",
				severity: "error"
			});
		}
		finally {
			setLoading(false);
		}
	}

	return (
		<TableLayout>
			{/* Toolbar  */}
			<PlanTableToolbar />

			{/* Table  */}
			<TableContainer sx={{ maxHeight: 460 }}>
				<Table
					stickyHeader
					aria-label="sticky table"
				>
					<EnhancedTableHead
						orderBy={orderBy}
						order={order}
						onRequestSort={handleRequestSort}
						headCells={headCells}
					/>
					{filteredRows.map(row => (
						<TableRow
							key={row.planId}
							cells={[
								{
									value: row.construction
								},
								{
									value: row.plan
								},
								{
									value: row.startDate
								},
								{
									value: row.endDate
								},
								{
									value: row.createdDate
								},
							]}
						/>
					))}
				</Table>
				{!filteredRows.length && (
					<div className="h-120 grid place-items-center text-apple-gray bg-content">
						Danh sách trống
					</div>
				)}
			</TableContainer>

			{/* Pagigation  */}
			<TablePagination
				rowsPerPageOptions={[5, 10, 15]}
				component="section"
				count={filteredRows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</TableLayout>
	)
}