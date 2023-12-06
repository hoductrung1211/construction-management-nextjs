export interface IContructionSite {
    constructionCode: string;
    constructionName: string;
    address: string;
    brand: string;

    startDate: Date;
    endDate: Date;

    creator: string;
    createdTime: Date;
}

export const initCSInfo: IContructionSite = {
    constructionCode: "CS5421",
    constructionName: "Thế giới di động",
    address: "128 Tran Quang Khai, P.Tan Binh, Q9, TP.HCM",
    brand: "Thế giới di động",

    creator: "Ho Duc Trung",
    createdTime: new Date(2024, 11, 20),

    endDate: new Date(2024, 11, 20),
    startDate: new Date(2024, 11, 20),
};

export const contructionSiteList = [
    {
        constructionCode: "#BHX0001",
        constructionName: "Bách Hóa Xanh Lã Xuân Oai",
        costEstimateList: [
            {
                costEstimateCode: "#CE0001",
                costEstimateName: "DT Bách Hóa Xanh 22/10/2023",
            },
            {
                costEstimateCode: "#CE0002",
                costEstimateName: "DT Bách Hóa Xanh 23/10/2023",
            },
        ],
    },
    {
        constructionCode: "#TGDD0001",
        constructionName: "Thế Giới Di Động Lê Văn Việt",
        costEstimateList: [
            {
                costEstimateCode: "#CE0003",
                costEstimateName: "DT Thế Giới Di Động 25/10/2023",
            },
            {
                costEstimateCode: "#CE0004",
                costEstimateName: "DT Thế Giới Di Động 26/10/2023",
            },
        ],
    },
    {
        constructionCode: "#DMX0001",
        constructionName: "Điện Máy Xanh Phú Hữu",
        costEstimateList: [
            {
                costEstimateCode: "#CE0005",
                costEstimateName: "DT Điện Máy Xanh 02/11/2023",
            },
            {
                costEstimateCode: "#CE0006",
                costEstimateName: "DT Điện Máy Xanh 03/11/2023",
            },
        ],
    },
    {
        constructionCode: "#AVK0001",
        constructionName: "AVAKcostEstimateCodes Lê Văn Việt",
        costEstimateList: [
            {
                costEstimateCode: "#CE0007",
                costEstimateName: "DT AVAKcostEstimateCodes 06/11/2023",
            },
            {
                costEstimateCode: "#CE0008",
                costEstimateName: "DT AVAKcostEstimateCodes 07/11/2023",
            },
        ],
    },
];
