"use client";
import diaryApi from "@/apis/dairy";
import planTaskAPI from "@/apis/plantask";
import Icon from "@/components/Icon";
import ConstructionSiteInfo from "@/components/diary/create/ConstructionSiteInfo";
import ListLaborsDiary, { ILaborList } from "@/components/diary/create/ListLaborsDiary";
import ListPicture from "@/components/diary/create/ListPicture";
import ListProblem from "@/components/diary/create/ListProblem";
import ListProductsDiary, { IProductList } from "@/components/diary/create/ListProductsDiary";
import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import IDiaryCreate, { ILaborCreate, IProductCreate } from "@/models/DiaryCreate";
import { IDairyEmployee as IDiaryEmployee } from "@/models/DiaryEmployee";
import { IDairyProduct as IDiaryProduct } from "@/models/DiaryProduct";
import IPlanTaskDiary from "@/models/PlanTaskDiary";
import IProgress from "@/models/Progress";
import { IWeather } from "@/models/Weather";
import { Button, SelectChangeEvent, styled } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function CreateDiary() {
  const useLoading = useLoadingAnimation();
  const setAlert = useAlert();

  const [selectedCS, setSelectedCSId] = useState("");
  const [selectedWT, setselectedWTId] = useState(""); // plan_task_id
  const [selectedWeather, setSelectedWeatherId] = useState("");
  const [labors, setLabors] = useState<IDiaryEmployee[]>([]); //list labor
  const [products, setProducts] = useState<IDiaryProduct[]>([]); // list product
  const [showInfo, setShowInfo] = useState(false);

  //const save diary
  const [diary, setDiary] = useState<IDiaryCreate>();
  const [startTime, setStartTime] = useState<Dayjs>(dayjs(Date.now())); //starttime
  const [endTime, setEndTime] = useState<Dayjs>(dayjs(Date.now())); //endtime
  const [temperature, setTemperature] = useState<number>(0); //temperature
  const [amountDone, setAmountDone] = useState<number>(0); //amountDone
  const [listLabor, setListLabor] = useState<ILaborCreate[]>([]);
  const [listProduct, setListProduct] = useState<IProductCreate[]>([]);
  const [planTask, setPlanTask] = useState<IPlanTaskDiary>();
  const [weatherList, setWeatherList] = useState<IWeather[]>([]);
  const [progressInfo, setProgressInfo] = useState<IProgress>();
  const [listPicture, setListPicture] = useState<File[]>();
  const [listProblem, setListProblem] = useState<File[]>();
  const [problem, setProblem] = useState<String>("");

  var listSaveDiaryLabor: ILaborCreate[] = [];
  var listSaveDiaryProduct: IProductCreate[] = [];

  const handleCSChange = (constructionSiteId: string) => {
    setSelectedCSId(constructionSiteId);
  };

  const handleWTChange = (event: SelectChangeEvent) => {
    setselectedWTId(event.target.value);
  };

  const handleWeatherChange = (event: SelectChangeEvent) => {
    setSelectedWeatherId(event.target.value);
  };

  //handle change value
  function onChangePlanTask(value: IPlanTaskDiary): void {
    setPlanTask(value);
  }

  function onChangeStartTime(value: Dayjs): void {
    if (value?.isBefore(startTime)) {
      setStartTime(value);
    } else {
      setAlert({
        severity: "error",
        message: "Giờ bắt đầu phải trước giờ kết thúc",
      });
    }
  }

  function onChangeEndTime(value: Dayjs): void {
    if (value?.isAfter(startTime)) {
      setEndTime(value);
    } else {
      setAlert({
        severity: "error",
        message: "Giờ kết thúc phải trước giờ bắt đầu",
      });
    }
  }
  const onChangeTemperature = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTemperature(parseInt(e.target.value));
  };

  const onChangeAmountDone = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const temp = parseInt(e.target.value);
    if (temp >= 0) setAmountDone(temp);
    else setAmountDone(0);
  };

  const onChangeLabor = (labors: IDiaryEmployee[]) => {
    setLabors(labors);
  };

  const onChangeProduct = (products: IDiaryProduct[]) => {
    setProducts(products);
  };

  const onChangePicture = (files: File[]) => {
    setListPicture(files);
  };

  const onChangeProblem = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProblem(event.target.value);
  };

  const onChangeListProblem = (files: File[]) => {
    setListProblem(files);
  };

  // const handleCEChange = (costEstimateId: string) => {
  //     setSelectedCEId(costEstimateId);
  // };

  async function HandleLoadPlanTaskInfo() {
    useLoading(true);
    try {
      const planTask = ((await planTaskAPI.getPlanTask(selectedWT)) || [])[0];
      setPlanTask(planTask);

      const weathers = (await diaryApi.getWeather()) || [];
      setWeatherList(weathers);

      const progress = await diaryApi.getProgressInfo(planTask.plantaskid as number) as IProgress;
      setProgressInfo(progress);

      const laborData = await planTaskAPI.getLabor(selectedWT);
      setLabors(laborData || []);

      const productData = await planTaskAPI.getProduct(selectedWT);
      setProducts(productData || []);

      setShowInfo(true);
    } catch (e) {
      console.log(e);
    } finally {
      useLoading(false);
    }
  }

  //save diary
  async function handleSaveDiary() {
    labors.forEach((l) => {
      var saveDiaryLabor: ILaborCreate = {
        laborID: l.mdEmployee.employeeid,
        shiftID: l.shiftid as number,
      };

      listSaveDiaryLabor.push(saveDiaryLabor);
    });

    products.forEach((p) => {
      var saveDiaryProduct: IProductCreate = {
        productId: p.mdProduct.productid,
        consumptionAmount: p.consumptionAmount as number,
      };

      listSaveDiaryProduct.push(saveDiaryProduct);
    });

    var newDiary: IDiaryCreate = {
      amountOfWork: amountDone,
      starttime: `${startTime.hour()}:${startTime.minute()}:${startTime.second()}`, // startTime.toString(),
      endtime: `${endTime.hour()}:${endTime.minute()}:${endTime.second()}`, //endTime.toString(),
      temperature: temperature,
      cmsPlanTask: parseInt(selectedWT),
      creator: 1,
      quantityUnit: planTask?.mdTask.mdQuantityUnit.quantityunitid as number,
      mdWeather: parseInt(selectedWeather),

      pictures: [], // listPicture as File[],
      picturesProblem: [], // listProblem as File[],
      problem: problem as String,

      products: listSaveDiaryProduct,
      labors: listSaveDiaryLabor,
    };


    // var formData = new FormData();
    // formData.append("amountOfWork", amountDone.toString());
    // formData.append("starttime", `${startTime.hour()}:${startTime.minute()}:${startTime.second()}`);
    // formData.append("endtime", `${endTime.hour()}:${endTime.minute()}:${endTime.second()}`);
    // formData.append("temperature", temperature.toString());
    // formData.append("cmsPlanTask", selectedWT);
    // formData.append("creator", "1");
    // formData.append("quantityUnit", planTask?.mdTask.mdQuantityUnit.quantityunitid.toString());
    // formData.append("mdWeather", selectedWeather);
    // listPicture?.every((file) => {
    //   console.log(file);
    //   formData.append("pictures", file);
    // });

    // listProblem?.every((file) => {
    //   console.log(file);
    //   formData.append("picturesProblem", file);
    // });

    // formData.append("problem", "");
    // formData.append("products", "");
    // formData.append("labors", "");

    const result = await diaryApi.saveDiary(newDiary);
    // console.log( newDiary);
  }

  //remove child in map
  function handleRemoveLabor(idx: string) {
    const newList = labors.filter((item) => item.mdEmployee.userid !== idx);
    setLabors(newList);
  }

  function handleRemoveProduct(idx: number) {
    const newList = products.filter((item) => item.mdProduct.productid !== idx);
    setProducts(newList);
  }

  return (
    <div className="bg-background-color h-screen">
      <ConstructionSiteInfo
        selectedCS={selectedCS}
        selectedTaskWI={selectedWT}
        selectedWeather={selectedWeather}
        startTime={startTime}
        endTime={endTime}
        temperature={temperature}
        amountDone={amountDone}
        planTask={planTask as IPlanTaskDiary} 
        weather={weatherList as IWeather[]}
        progress={progressInfo as IProgress}
        showInfo={showInfo}
        onChangeCS={handleCSChange}
        onChangeTaskWI={handleWTChange}
        onChangeWeather={handleWeatherChange}
        onChangeStartTime={onChangeStartTime}
        onChangeEndTime={onChangeEndTime}
        onChangeTemperature={onChangeTemperature}
        onChangeAmountDone={onChangeAmountDone}
        HandleLoadPlanTaskInfo={HandleLoadPlanTaskInfo}
      />
      {showInfo && (
        <>
          {labors !== undefined ? (
            <ListLaborsDiary
              lslabor={labors}
              onChangeLabor={onChangeLabor}
              handleRemoveLabor={handleRemoveLabor}
            />
          ) : (
            <p>Không có nhân công</p>
          )}
          <ListProductsDiary
            lsproduct={products}
            onChangeProduct={onChangeProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
          <ListPicture onChangePicture={onChangePicture} />
          <ListProblem
            problem={problem}
            onChangeProblem={onChangeProblem}
            onChangeListProblem={onChangeListProblem}
          />

          <div className=" p-3 flex justify-end items-center gap-5">
            <Button
              color="success"
              className="min-w-[100px] bg-success flex justify-center items-center gap-3"
              variant="contained"
              onClick={() => handleSaveDiary()}
            >
              <Icon name="floppy-disk" size="xl" />
              Lưu
            </Button>
            <Button
              color="info"
              className="min-w-[100px] bg-primary flex justify-center items-center gap-3"
              variant="contained"
            >
              <Icon name="paper-plane" size="xl" />
              Gửi
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

const initlistLabors: ILaborList = {
  labors: [
    {
      isSelected: false,
      no: 1,
      laborCode: "#EL0001",
      firstName: "Diễm Quỳnh",
      lastName: "Hà",
      role: "Công nhân",
      shift: 8,
    },
    {
      isSelected: false,
      no: 2,
      laborCode: "#EL0002",
      firstName: "Hồ Hoàng Vy",
      lastName: "Chu",
      role: "Công nhân",
      shift: 4,
    },
    {
      isSelected: false,
      no: 2,
      laborCode: "#EL0003",
      firstName: "Thị Vân Khánh",
      lastName: "Nguyễn",
      role: "Công nhân",
      shift: 8,
    },
  ],
};

const initlistProducts: IProductList = {
  products: [
    {
      no: 1,
      pdId: "#PD0001",
      pdName: "Xi măng",
      pdUnit: "Bao",
      pdAmount: 5,
    },
    {
      no: 2,
      pdId: "#PD0002",
      pdName: "Cát",
      pdUnit: "m3",
      pdAmount: 100,
    },
    {
      no: 3,
      pdId: "#PD0003",
      pdName: "Đá",
      pdUnit: "m3",
      pdAmount: 80,
    },
  ],
};
