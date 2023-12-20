import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';
import { IEnhancedTableProps } from "./constants";

export default function EnhancedTableHead<TData>({
	order,
	orderBy,
	onRequestSort,
	headCells
}: IEnhancedTableProps<TData>) {
	const createSortHandler = (property: keyof TData) =>
		(event: React.MouseEvent<unknown>) =>
			onRequestSort(event, property);

	return (
		<TableHead>
			<TableRow>
				{headCells.map(headCell => (
					<TableCell key={headCell.id.toString()}
						align={headCell.numeric ? 'right' : 'left'}
						width={headCell?.width ?? "inherit"} 
					>
						<TableSortLabel
							className="font-semibold"
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}