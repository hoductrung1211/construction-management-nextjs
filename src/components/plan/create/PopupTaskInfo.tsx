import {  Tab, Tabs } from "@mui/material";
import Icon from "../../Icon";
import { useState } from "react";
import { CustomTabPanel } from "../../TabPanel";
import TaskLaborSection from "./TaskLaborSection";
import TaskProductSection from "./TaskProductSection";
import { IEmployee } from "@/models/Employee";
import { IProduct } from "@/models/Product";

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function PopupTaskInfo({
    labors,
    products,

    onChangeLabors,
    onChangeProducts,
}: {
    labors: IEmployee[];
    products: {
        product: IProduct;
        quantity: number;
    }[];
    
    onChangeLabors: (newLabors: IEmployee[]) => void;
    onChangeProducts: (newProducts: {
        product: IProduct;
        quantity: number;
    }[]) => void;
}) {
    const [value, setValue] = useState(0);

    const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
        <div className="min-w-[800px] h-[560px] flex flex-col bg-white rounded-2xl overflow-hidden">
            <header className="flex-shrink-0 h-16 px-6 flex gap-6 items-center border-b  ">
                <Icon className="text-apple-gray" name="trowel" size="xl" />
                <p>
                    <span className="font-bold mr-2">Xây dựng cơ bản</span>
                    #WI1093
                </p>
                <p>
                    <span className="font-bold mr-2">Đào móng</span>
                    #TSK0301
                </p>
                <p>
                    <span className="font-bold mr-2">700 m3</span>
                </p>
            </header>
            <Tabs value={value} onChange={handleChangeTab}>
                <Tab label="Nhân công" {...a11yProps(0)} />
                <Tab label="Vật tư" {...a11yProps(1)} />
            </Tabs> 
            
            <CustomTabPanel
                className="flex-grow flex flex-col overflow-auto"
                value={value}
                index={0}
            >
                <TaskLaborSection
                    key={labors.toString()}
                    labors={labors}
                    onChangeLabors={onChangeLabors}
                />
            </CustomTabPanel>
            <CustomTabPanel
                className="h-full flex flex-col "
                value={value}
                index={1}
            >
                <TaskProductSection
                    products={products}
                />
            </CustomTabPanel>
            <footer className="flex-shrink-0 h-10 border-t ">

            </footer>
        </div>
    )
}