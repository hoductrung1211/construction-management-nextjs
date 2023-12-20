"use client";
import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import SelectTask from "./SelectTask";
import DiaryOverview from "./DiaryOverview/DiaryOverview";
import DiaryLaborSection from "./DiarySections/DiaryLaborSection";
import DiaryErrorSection from "./DiarySections/DiaryErrorSection";
import DiaryPictureSection from "./DiarySections/DiaryPictureSection";
import DiaryProductSection from "./DiarySections/DiaryProductSection";

export default function CreateDiary() {
    // SUP (set up page)
    const setLoading = useLoadingAnimation();
    const setAlert = useAlert();

    // Data
    

    const handleLoadPlanTask = async (planTaskId: number) => {
        setLoading(true);
        try {

        }
        catch (ex) {
            setAlert({
                message: "Xảy ra lỗi trong quá trình load Thông tin công việc! Vui lòng thử lại.",
                severity: "error"
            })
        }
        finally {
            setLoading(false);
        }
    } 
    
    return (
        <div className="py-5 flex flex-col gap-8">
            <section className="p-5 flex flex-col gap-5 rounded-lg bg-content shadow-md">
                <h1 className="text-lg font-semibold">
                    Thông tin nhật ký công trình
                </h1>
                <SelectTask
                    onLoadPlanTask={handleLoadPlanTask}
                />
                <DiaryOverview
                
                />
            </section>
            <section className="py-8 flex flex-col rounded-lg overflow-hidden border bg-content shadow-md">
                <DiaryLaborSection
                
                />

                <DiaryProductSection
                
                />
                
                <DiaryPictureSection
                
                />

                <DiaryErrorSection
                
                />
            </section>
            <footer className="flex justify-end gap-4">


            </footer>
        </div>
    )
}