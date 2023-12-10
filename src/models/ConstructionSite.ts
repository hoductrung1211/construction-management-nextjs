import IConstructionState from "./ConstructionState";
import IConstructionType from "./ConstructionType";
import { IEmployee } from "./Employee";

export default interface IConstructionSite {
    constructionsiteid: number;
    constructionsitecode: string;
    constructionsitename: string;
    address: string;

    mdConstructionType: IConstructionType;

    startdate: string;
    enddate: string;

    mdEmployee: IEmployee; // creator
    // createddate: string;
    mdConstructionState: IConstructionState;
}

const example = {
    "address": "123 Main Street, City A",
        "constructionsiteid": 1,
        "constructionsitecode": "CS001",
        "constructionsitename": "Thế Giới Di Động Lê Văn Việt",
        "startdate": "2023-01-01",
        "enddate": "2023-12-31",
        "mdEmployee": {
            "employeeid": 1,
            "address": "123 Main St",
            "dateofbirth": "1990-01-01",
            "email": "john@example.com",
            "firstname": "Hieu",
            "gender": true,
            "idcard": "123456789",
            "lastname": "Doe",
            "phone": "123-456-7890",
            "userid": "user123"
        },
        "mdConstructionType": {
            "constructiontypeid": 1,
            "constructiontypename": "Supper mini",
            "mdBrand": {
                "brandid": 1,
                "brandname": "Thế Giới Di Động",
                "mdCompany": {
                    "companyid": 1,
                    "companyaddress": "123 Đường ABC, Quận 1, Thành phố HCM",
                    "companyname": "Công ty TGDD"
                }
            }
        },
        "mdConstructionState": {
            "constructionstateid": 1,
            "constructionstatename": "Đã duyệt"
        }
}