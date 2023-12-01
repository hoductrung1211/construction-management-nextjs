import ConstructionState from "./ConstructionState";
import ConstructionType from "./ConstructionType";
import Employee from "./Employee";

export default interface ConstructionSite {
  constructionsiteid?: string;
  constructionsitecode: string;
  constructionsitename: string;
  address?: string;
  enddate?: Date;
  startdate?: Date;
  createdate?: Date;
  mdEmployee?: Employee;
  mdConstructionType?: ConstructionType;
  mdConstructionState?: ConstructionState;
}
