import ConstructionSite from "@/models/ConstructionSite";
import request from "./request";

const APIConstructionSite = {
  getListActive: () => request.get<ConstructionSite[]>("/constructions/active"),
  getById: (idConstruction: Number) =>
    request.get<ConstructionSite>(`/constructions/${idConstruction}`),
};

export default APIConstructionSite;
