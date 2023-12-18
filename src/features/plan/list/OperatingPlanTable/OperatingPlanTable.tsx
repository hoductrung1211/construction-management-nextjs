"use client";
import CustomTableContainer from "@/components/CustomTableContainer";
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from "@mui/material";
import Link from "next/link";
import PlanTableToolbar from "../PlanTableToolbar";

export default function OperatingPlanTable() {

	return (
		<CustomTableContainer>
			<PlanTableToolbar />
			<TableContainer sx={{ maxHeight: 460 }}>
				<Table stickyHeader aria-label="sticky table" >
					<TableBody>
						
					</TableBody>
				</Table>
			</TableContainer>

			{/* <TablePagination
				rowsPerPageOptions={[5, 10, 15]}
				component="div"
				count={filteredRows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/> */}
		</CustomTableContainer>
	);
}

// {visibleRows.map((row, index) => {
// 	const labelId = `enhanced-table-checkbox-${index}`;

// 	return (
// 		<TableRow hover key={row.recruitmentId}>
// 			<TableCell
// 				component="th"
// 				id={labelId}
// 				scope="row"
// 			>
// 				<Link href={`recruitments/${row.recruitmentId}`}>{row.recruitmentTitle}</Link>
// 			</TableCell>
// 			<TableCell align="left">{row.departmentName}</TableCell>
// 			<TableCell align="left">{row.jobJustificationName}</TableCell>
// 			<TableCell align="right">{row.numberOfApplicant}</TableCell>
// 			<TableCell align="right">{getVNLocaleDateString(row.createdTime)}</TableCell>
// 			<TableCell align="left">
// 				{/* <RecruitmentStateChip stateId={row.recruitmentStateId}>
// 					{row.recruitmentStateName}
// 				</RecruitmentStateChip> */}
// 			</TableCell>
// 		</TableRow>
// 	)
// })}