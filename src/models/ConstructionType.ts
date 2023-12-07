import IBrand from "./Brand";

export default interface IConstructionType {
    constructiontypeid: number;
    constructiontypename: string;

    mdBrand: IBrand;
}