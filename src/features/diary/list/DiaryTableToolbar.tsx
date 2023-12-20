'use client';
import constructionSiteAPI from "@/apis/constructionSite";
import IconButton from "@/components/IconButton";
import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import IConstructionSite from "@/models/ConstructionSite";
import { Autocomplete,  TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";

interface IDiaryTableToolbar {
	
}

export default function DiaryTableToolbar({

}: IDiaryTableToolbar) {
	const setLoading = useLoadingAnimation();
	const setAlert = useAlert();
	const router = useRouter();

	const [constructionSites, setConstructionSites] = useState<IConstructionSite[]>([]);

	useEffect(() => {
		fetchConstructions();
	}, []);

	async function fetchConstructions() {
		try {
			setLoading(true);
			const CSRes = await constructionSiteAPI.getListActive() || [];
			setConstructionSites(CSRes);
		}
		catch (ex) {
			setAlert({
				message: "Xảy ra lỗi khi load danh sách Công trình",
				severity: "error"
			});
		}
		finally {
			setLoading(false);
		}
	}

	function handleInputChange() {

	}

	function handleAutocompleteChange(event: SyntheticEvent<Element, Event>, selectedOption: IConstructionSite ) {
		if (selectedOption) { 
		}
	}

	return (
		<div className="h-16 px-3 flex justify-between items-center bg-content">
			<Autocomplete
				className="bg-white w-96"
				size="small"
				disablePortal
				noOptionsText="Không có kết quả tìm kiếm phù hợp"
				options={constructionSites}
				getOptionLabel={(option: IConstructionSite) => 
					"#" + option.constructionsiteid + " " + option.constructionsitename
				}
				onInputChange={handleInputChange}
				onChange={handleAutocompleteChange}
				renderInput={(params) => (
					<TextField {...params} label="Nhập mã hoặc tên công trình" />
				)}
			/>

			<div className="flex gap-3">
				<IconButton
					name="plus"
					tooltip="Tạo mới"
					onClick={() => router.push("/construction-diaries/create")}
				/>
			</div>
		</div>
	)
}