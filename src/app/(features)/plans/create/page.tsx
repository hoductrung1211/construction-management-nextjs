'use client';
import CreatePlan from "@/features/plan/create-rework/CreatePlan";
import PageContainer from "@/layouts/PageContainer";

export default function Page() {
  return (
    <PageContainer
      breadcrumbs={[
        {
          text: "Home",
          href: "./"
        },
        {
          text: "Construction Sites"
        }, 
      ]}
    >
      <CreatePlan />
    </PageContainer>
  );
}