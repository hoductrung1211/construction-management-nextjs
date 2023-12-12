"use client";
import planTaskAPI from "@/apis/plantask";
import Icon from "@/components/Icon";
import ConstructionSiteInfo from "@/components/diary/create/ConstructionSiteInfo";
import ListLaborsDiary, {
  ILaborList,
} from "@/components/diary/create/ListLaborsDiary";
import ListPicture from "@/components/diary/create/ListPicture";
import ListProblem from "@/components/diary/create/ListProblem";
import ListProductsDiary, {
  IProductList,
} from "@/components/diary/create/ListProductsDiary";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import { IDairyEmployee } from "@/models/DiaryEmployee";
import { IDairyProduct } from "@/models/DiaryProduct";
import { Button, SelectChangeEvent, styled } from "@mui/material";
import { useState } from "react";

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

  const [labors, setLabors] = useState<IDairyEmployee[]>([]);
  const [products, setProducts] = useState<IDairyProduct[]>([]);
  const [selectedCS, setSelectedCSId] = useState("");
  const [selectedWT, setselectedWTId] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const handleCSChange = (constructionSiteId: string) => {
    setSelectedCSId(constructionSiteId);
  };

  async function HandleShowInfo(showInfo: boolean) {
    useLoading(true);
    try {
      const laborData = await planTaskAPI.getLabor(selectedWT);
      const productData = await planTaskAPI.getProduct(selectedWT);
      setLabors(laborData || []);
      setProducts(productData || []);
      setShowInfo(showInfo);
    } catch (e) {
      console.log(e);
    } finally {
      useLoading(false);
    }
  }

  const handleWTChange = (event: SelectChangeEvent) => {
    setselectedWTId(event.target.value);
  };

  // const handleCEChange = (costEstimateId: string) => {
  //     setSelectedCEId(costEstimateId);
  // };

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
        onChangeCS={handleCSChange}
        showInfo={showInfo}
        onChangeShowInfo={HandleShowInfo}
        onChangetaskWI={handleWTChange}
      />
      {showInfo && (
        <>
          {labors !== undefined ? (
            <ListLaborsDiary
              lslabor={labors}
              handleRemoveLabor={handleRemoveLabor}
            />
          ) : (
            <p>Không có nhân công</p>
          )}
          <ListProductsDiary
            lsproduct={products}
            handleRemoveProduct={handleRemoveProduct}
          />
          <ListPicture />
          <ListProblem />

          <div className=" p-3 flex justify-end items-center gap-5">
            <Button
              color="success"
              className="min-w-[100px] bg-success flex justify-center items-center gap-3"
              variant="contained"
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
