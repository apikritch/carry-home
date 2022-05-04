import Api from "@/services/Api";

export default {
  getAllStates() {
    return Api().get("states");
  }
};
