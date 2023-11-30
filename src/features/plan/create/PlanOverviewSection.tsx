import ConstructionSiteDetail, { ICSDetailProps } from "@/layouts/Plan/ConstructionSiteDetail";
import CostEstimateDetail, { ICEDetailProps } from "@/layouts/Plan/CostEstimateDetail";

export default function PlanOverviewSection({
  csInfo,
  ceInfo,
  children,
}: {
    csInfo: ICSDetailProps,
  ceInfo: ICEDetailProps,
  children?: React.ReactNode
}) {
  return (
    <section
      className="flex flex-col gap-4 py-4 rounded-md bg-white"
      id="plan-info-section"
    >
      <h6 className="px-5 font-semibold text-lg ">Thông tin kế hoạch</h6>
      <div className="px-5 py-2 flex flex-col gap-5">
        {children}
        <section className="p-5 grid grid-cols-2 gap-10 bg-subdued rounded-md">
          <ConstructionSiteDetail
            csInfo={csInfo} 
          />
          <CostEstimateDetail
            ceInfo={ceInfo}
          />
        </section>
      </div>
    </section>
  );
}
