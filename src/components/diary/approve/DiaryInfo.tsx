"use client";

import { useEffect, useMemo, useState } from "react";
import ListPicture, { IImagesList } from "../ListPicture";
import ListProductsDiary from "../ListProductsDiary";
import ListProblem from "../ListProblem";
import Image from "next/image";
import IDiary from "@/models/Diary";
import DiaryMetaData from "./DiaryMetaData";
import { IDiaryEmployeeDetail } from "@/models/DiaryEmployee";
import ListLaborsDiary from "../ListLaborsDiary";
import { IDiaryProductDetail } from "@/models/DiaryProduct";
import IFile from "@/models/File";
import DetailTitle from "../DetailTitle";
import { DefaultizedPieValueType, PieChart, pieArcLabelClasses } from "@mui/x-charts";

export interface IDRDetailProps {}
export default function DiaryInfo({
  diary,
  lsLabor,
  lsProduct,
  lsFile,
}: {
  diary: IDiary;
  lsLabor: IDiaryEmployeeDetail[];
  lsProduct: IDiaryProductDetail[];
  lsFile: IFile[];
}) {

  const [weather, setWeather] = useState<string>();
  function imageWeather() {
    switch (diary.mdWeather.weatherid) {
      case 1: //Nắng
        setWeather("/iconweathers/sunny.png");
        break;
      case 2: //Mưa
        setWeather("/iconweathers/rain.png");
        break;
      case 3: //Nhiều mây
        setWeather("/iconweathers/cloudy.png");
        break;
      case 4: //Sương mù
        setWeather("/iconweathers/fog.png");
        break;
      case 5: //Nồm
        setWeather("/iconweathers/wet.png");
        break;
    }
  }

  useEffect(() => {
    imageWeather();
  }, []);

  const progressChart = useMemo(() => {
    var data = [
      { label: "Khối lượng hoàn thành", value: diary.amountofworkdone, color: "#FFBB28" },
      {
        label: "Khối lượng tích lũy",
        value: diary.cmsProgresses ? diary.cmsProgresses.totalamountofworkdone : 0,
        color: "#00C49F",
      },
      {
        label: "Khối lượng còn lại",
        value:
          diary.cmsPlanTask.amountofwork -
          (diary.cmsProgresses ? diary.cmsProgresses.totalamountofworkdone : 0) -
          diary.amountofworkdone,
        color: "#FF8042",
      },
    ];
    const sizing = {
      margin: { left: -100 },
      width: 400,
      height: 200,
    };
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

    const getArcLabel = (params: DefaultizedPieValueType) => {
      const percent = params.value / TOTAL;
      return `${(percent * 100).toFixed(0)}%`;
    };
    return (
      <div>
        <p>{`Khối lượng kế hoạch: ${diary.cmsPlanTask.amountofwork} ${diary.cmsPlanTask.mdTask.mdQuantityUnit.quantityunitname}`}</p>
        <PieChart
          series={[
            {
              outerRadius: 80,
              data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 12,
            },
          }}
          {...sizing}
          slotProps={{
            legend: {
              hidden: false,
              direction: "column",
              position: {
                vertical: "middle",
                horizontal: "right",
              },
            },
          }}
        />
      </div>
    );
  }, [diary]);

  return (
    <div className=" flex gap-3 mx-6">
      <div className=" flex-none w-4/5 ">
        <DetailTitle
          workitemCode={diary.cmsPlanTask.mdWorkItem.workitemCode}
          workitemName={diary.cmsPlanTask.mdWorkItem.workitemname}
          taskCode={diary.cmsPlanTask.mdTask.taskcode}
          taskName={diary.cmsPlanTask.mdTask.taskname}
        />
        <section>
          <div>
            <div className="bg-white rounded-b-lg flex-col py-5">
              <p className=" font-semibold text-lg ml-5">Chi tiết nhật ký công trình</p>
              <div className="flex gap-6 mx-5 mt-3">
                <div className="grow bg-[#F9FAFB] rounded-xl">
                  <div className=" grid grid-cols-2 m-5 gap-4">
                    <div className=" flex flex-col col-span-2 h-32 justify-center items-center">
                      {weather && (
                        <Image
                          src={weather as string}
                          alt=""
                          width={150}
                          height={150}
                          className=" w-28 h-28 object-cover rounded-none mb-2"
                        />
                      )}
                      <div className=" flex col-span-2 font-semibold gap-3">
                        <p>{diary.mdWeather.weathername}</p>
                        <p>
                          Nhiệt độ: <span>{diary.temperature}&deg;C</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-center font-semibold">Giờ bắt đầu</p>
                    <p className="text-center">{diary.starttime}</p>
                    <p className="text-center font-semibold">Giờ kết thúc</p>
                    <p className="text-center">{diary.endtime}</p>
                  </div>
                </div>
                {progressChart}
              </div>
            </div>
          </div>
        </section>

        <ListLaborsDiary lslabor={lsLabor} />
        <ListProductsDiary lsproduct={lsProduct} />
        <ListPicture lsimages={lsFile.filter((item) => item.filetype == 1)} />
        <ListProblem
          lsimages={lsFile.filter((item) => item.filetype == 0)}
          problem={diary.problem}
        />
      </div>
      <div className="grow">
        <DiaryMetaData
          planCode={diary.cmsPlanTask.cmsPlan.planidcode}
          diaryId={diary.diaryid}
          creatorDiary={diary.mdEmployee.lastname + " " + diary.mdEmployee.firstname}
          createTime={diary.createdtime}
          lsHistory={diary.cmsDiaryHistories}
          stateID={diary.cmsDiaryState.diarystateid}
          stateName={diary.cmsDiaryState.diarystatename}
        />
      </div>
    </div>
  );
}
