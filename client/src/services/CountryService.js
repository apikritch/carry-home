import Api from "@/services/Api";

export default {
  getAllCountries() {
    return Api().get("countries");
  }
};
