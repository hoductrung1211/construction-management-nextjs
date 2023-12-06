import ConstructionSiteDetail, {
  ICSDetailProps,
} from "../ConstructionSiteDetail";
import CostEstimateDetail, { ICEDetailProps } from "../CostEstimateDetail";
import PlanInfoTitle, { IPLInfoTitle } from "../PlanInfoTitle";

export default function PlanInfo({
  plInfo,
  csInfo,
  ceInfo,
} : {
  plInfo: IPLInfoTitle;
  csInfo: ICSDetailProps;
  ceInfo: ICEDetailProps;
}) {
  return (
    <section className="p-4 rounded-md bg-white">
    <PlanInfoTitle plInfo={plInfo} />
    <div className="p-5 grid grid-cols-2 bg-content border rounded-md">
      <ConstructionSiteDetail csInfo={csInfo} />
      <CostEstimateDetail ceInfo={ceInfo} />
    </div>
  </section>
  )
}
