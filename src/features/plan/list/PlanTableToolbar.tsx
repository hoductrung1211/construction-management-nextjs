"use client";
import constructionSiteAPI from "@/apis/constructionSite";
import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import IConstructionSite from "@/models/ConstructionSite";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";

interface IPlanTableToolbar {}

export default function PlanTableToolbar({}: IPlanTableToolbar) {
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
      const CSRes = (await constructionSiteAPI.getListActive()) || [];
      setConstructionSites(CSRes);
    } catch (ex) {
      setAlert({
        message: "Xảy ra lỗi khi load danh sách Công trình",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange() {}

  function handleAutocompleteChange(
    event: SyntheticEvent<Element, Event>,
    selectedOption: IConstructionSite
  ) {
    if (selectedOption) {
    }
  }

  return (
    <div className="h-20 px-3 flex justify-between items-center bg-content">
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
        renderInput={(params) => <TextField {...params} label="Nhập mã hoặc tên công trình" />}
      />

      <div className="flex gap-3">
        <Button
          className=" bg-color-btn-send hover:bg-color-btn-send ml-2"
          variant="contained"
          size="small"
          onClick={() => router.push("/plans/create")}
        >
          <span className="mx-2">
            <Icon name="plus" size="lg" />
          </span>
          Thêm mới
        </Button>
      </div>
    </div>
  );
}
