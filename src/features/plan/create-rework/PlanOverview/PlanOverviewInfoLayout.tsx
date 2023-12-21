"use client";
import CostEstimateInfoSection from "./CostEstimateInfoSection";
import ConstructionSiteInfoSection from "./ConstructionSiteInfoSection";
import { useState } from "react";
import IConstructionSite from "@/models/ConstructionSite";
import SelectCostEstimateSection from "./SelectCostEstimateSection";
import ICostEstimate from "@/models/CostEstimate";
import useAlert from "@/hooks/useAlert";
import constructionSiteAPI from "@/apis/constructionSite";
import costEstimateAPI from "@/apis/costEstimate";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";

export interface IPlanOverviewInfoLayoutProps {
	children?: React.ReactNode;
	onLoadCostEstimate: (costEstimateId: number) => void;
}

export default function PlanOverviewInfoLayout({
	children,
	onLoadCostEstimate,
}: IPlanOverviewInfoLayoutProps) {
	const setAlert = useAlert();
	const setLoading = useLoadingAnimation();

	// 1. Data for Select CS, CE section 
	// 	(using string type because value returned from Select Component is string)
	const [selectedCSId, setSelectedCSId] = useState<string>();
	const [selectedCEId, setSelectedCEId] = useState<string>();

	// 2. Data for displaying CS, CE info
	const [constructionSiteInfo, setConstructionSiteInfo] = useState<IConstructionSite>();
	const [costEstimateInfo, setCostEstimateInfo] = useState<ICostEstimate>();

	// 3. Event handlers of clicking "Load" Button
	const handleLoadData = async () => {
		if (selectedCSId && selectedCEId) {
			// if cost estimate selected box changed
			if (selectedCEId != costEstimateInfo?.costestimateid + "") {
				setLoading(true);
				try {
					const constructionSite = (await constructionSiteAPI.getListActive()).find(cs => cs.constructionsiteid + "" == selectedCSId);
					if (constructionSite) {
						setConstructionSiteInfo(constructionSite);
					}

					const costEstimate = (await costEstimateAPI.getById(Number.parseInt(selectedCEId)));
					if (costEstimate) {
						setCostEstimateInfo(costEstimate);
					}

					onLoadCostEstimate(Number.parseInt(selectedCEId));
				}
				catch (ex) {
					setAlert({
						message: "",
						severity: "error"
					})
				}
				finally {
					setLoading(false);
				}
			}
		}
		else {
			setAlert({
				message: "Vui lòng chọn đầy đủ các trường thông tin",
				severity: "error"
		  });
		}
	}

	return (
		<div className="flex flex-col gap-4 py-4 rounded-md bg-white shadow-md">
			<h6 className="px-5 flex justify-between items-center font-semibold text-lg ">
				Thông tin kế hoạch
			</h6>
			<div className="px-5 py-2 flex flex-col gap-5">
				{/* Dropdown fields */}
				<SelectCostEstimateSection
					selectedCSId={selectedCSId}
					selectedCEId={selectedCEId}
					onChangeSelectedCE={(newCEId) => setSelectedCEId(newCEId)}
					onChangeSelectedCS={(newCSId) => setSelectedCSId(newCSId)}
					onLoadData={handleLoadData}
				/>

				{/* Display Master Data */}
				{/* If both CS & CE info already loaded, show it */}
				{
					constructionSiteInfo && costEstimateInfo &&
					<div className="flex gap-5">
						<div className="w-2/3 p-5 grid grid-cols-2 bg-content border rounded-md">
							<ConstructionSiteInfoSection
								constructionSiteInfo={constructionSiteInfo}
							/>
							<CostEstimateInfoSection
								costEstimateInfo={costEstimateInfo}
							/>
						</div>
						{children}
					</div>
				}
			</div>
		</div>
	)
}