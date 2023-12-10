import { IEmployee } from "./Employee";
import IProduct from "./Product";

export interface ICreatePlanTask {
    isSelected: boolean;
    
    taskCode: string;
    taskName: string;
    startDate: Date | null;
    endDate: Date | null;
    
    // for popup
    labors: IEmployee[],
    products: {
        product: IProduct;
        quantity: number;
    }[]
}