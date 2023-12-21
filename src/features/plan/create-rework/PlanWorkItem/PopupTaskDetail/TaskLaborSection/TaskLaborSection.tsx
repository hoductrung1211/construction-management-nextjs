import { Autocomplete, FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { IEmployee } from "@/models/Employee";
import employeeAPI, { LaborType } from "@/apis/employee";
import TaskLaborItem from "./TaskLaborItem";

export default function TaskLaborSection({
	labors,
	onChangeLabors,
}: {
	labors: IEmployee[];
	onChangeLabors: (newLabors: IEmployee[]) => void;
}) {
	const [input, setInput] = useState("");

	const [currentLabors, setCurrentLabors] = useState(labors);
	const [listLabors, setListLabors] = useState<IEmployee[]>([]);

	useEffect(() => {
		setupData();
	}, [labors]);

	async function setupData() {
		setCurrentLabors(labors);
		try {
			const workers = await employeeAPI.getList(LaborType.Worker);
			setListLabors(workers);
		}
		catch (ex) {

		}
		finally {

		}
	} 

	return (
		<>
			<div className="flex-shrink-0 h-14 px-6 flex justify-between items-center bg-apple-gray-6">
				<p>
					<span className="font-bold">Tổng số nhân công</span> {currentLabors.length}
				</p>
				<FormControl className="w-80" size="small">
					<Autocomplete
						size="small"
						options={listLabors}
						getOptionLabel={option => option.employeeid + " " + option.firstname + " " + option.lastname}
						renderInput={(params) =>
							<TextField
								{...params}
								variant="standard"
								label="Thêm nhân công"
								placeholder="Nhập mã hoặc tên nhân công"
								value={input}
								onChange={e => setInput(e.target.value)}
							/>
						}
						onChange={(e, labor) => {
							if (labor && !currentLabors.find(l => l.employeeid == labor.employeeid)) {
								onChangeLabors([
									...currentLabors,
									labor
								]);

								setCurrentLabors([
									...currentLabors,
									labor
								]);
							}
						}}
						disableClearable={false}
						clearOnBlur={false}
						noOptionsText="Không có nhân công nào khớp với kết quả tìm kiếm"
					/>
				</FormControl>
			</div>

			<div className="h-full p-2 flex flex-col gap-2 overflow-auto ">
				{currentLabors.length ? (
					currentLabors.map((labor) => (
						<TaskLaborItem
							labor={labor}
							onUnselectLabor={() => {
								const currentIdx = currentLabors.findIndex(l => l.employeeid == labor.employeeid)
								setCurrentLabors([
									...currentLabors.slice(0, currentIdx),
									...currentLabors.slice(currentIdx + 1)
								]);
								const idx = labors.findIndex(l => l.employeeid == labor.employeeid);
								onChangeLabors([
									...labors.slice(0, idx),
									...labors.slice(idx + 1)
								])
							}}
						/>
					))
				) : (
					<p className="h-full grid place-items-center text-apple-gray-3">
						Chưa có nhân công nào được chọn
					</p>
				)}
			</div>
		</>
	);
}

