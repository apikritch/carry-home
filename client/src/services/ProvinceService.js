import Api from "@/services/Api";

export default {
  getAllProvinces() {
    return Api().get("provinces");
  }
};
