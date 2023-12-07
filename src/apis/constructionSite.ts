import IConstructionSite from "@/models/ConstructionSite";
import axios from "./axios.config";

const constructionSiteAPI = {
    getListActive: () => axios.get<IConstructionSite>("constructions")
};

export default constructionSiteAPI;
