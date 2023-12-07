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

// export const initCSInfo: IContructionSite = {
//     constructionsitecode: "CS5421",
//     constructionsitename: "Thế giới di động",
//     address: "128 Tran Quang Khai, P.Tan Binh, Q9, TP.HCM",
//     brand: "Thế giới di động",

//     creator: "Ho Duc Trung",
//     createdtime: new Date(2024, 11, 20),

//     enddate: new Date(2024, 11, 20),
//     startdate: new Date(2024, 11, 20),
// };

// export const contructionSiteList = [
//     {
//         constructionCode: "#BHX0001",
//         constructionName: "Bách Hóa Xanh Lã Xuân Oai",
//         costEstimateList: [
//             {
//                 costEstimateCode: "#CE0001",
//                 costEstimateName: "DT Bách Hóa Xanh 22/10/2023",
//             },
//             {
//                 costEstimateCode: "#CE0002",
//                 costEstimateName: "DT Bách Hóa Xanh 23/10/2023",
//             },
//         ],
//     },
//     {
//         constructionCode: "#TGDD0001",
//         constructionName: "Thế Giới Di Động Lê Văn Việt",
//         costEstimateList: [
//             {
//                 costEstimateCode: "#CE0003",
//                 costEstimateName: "DT Thế Giới Di Động 25/10/2023",
//             },
//             {
//                 costEstimateCode: "#CE0004",
//                 costEstimateName: "DT Thế Giới Di Động 26/10/2023",
//             },
//         ],
//     },
//     {
//         constructionCode: "#DMX0001",
//         constructionName: "Điện Máy Xanh Phú Hữu",
//         costEstimateList: [
//             {
//                 costEstimateCode: "#CE0005",
//                 costEstimateName: "DT Điện Máy Xanh 02/11/2023",
//             },
//             {
//                 costEstimateCode: "#CE0006",
//                 costEstimateName: "DT Điện Máy Xanh 03/11/2023",
//             },
//         ],
//     },
//     {
//         constructionCode: "#AVK0001",
//         constructionName: "AVAKcostEstimateCodes Lê Văn Việt",
//         costEstimateList: [
//             {
//                 costEstimateCode: "#CE0007",
//                 costEstimateName: "DT AVAKcostEstimateCodes 06/11/2023",
//             },
//             {
//                 costEstimateCode: "#CE0008",
//                 costEstimateName: "DT AVAKcostEstimateCodes 07/11/2023",
//             },
//         ],
//     },
// ];
