import IConstructionSite from "@/models/ConstructionSite";
import request from "./request";

const constructionSiteAPI = {
    getListActive: () => request.get<IConstructionSite[]>("constructions/active")
};

export default constructionSiteAPI;
