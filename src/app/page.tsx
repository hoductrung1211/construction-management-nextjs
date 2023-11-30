'use client';
import { Navigation } from "@/configs/sidebarNavigation";
import CreatePlan from "@/features/plan/create/CreatePlan";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import PageContainer from "@/layouts/PageContainer";
import { useEffect } from "react";

export default function Home() {
  const setLoading = useLoadingAnimation();

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <PageContainer
      activeNav={Navigation.ConstructionSites}
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
