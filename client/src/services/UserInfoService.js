import Api from "@/services/Api";

export default {
  getUserInfoById(usersId) {
    return Api().get(`users/${usersId}`);
  },
  postUserInfoById(usersId, profiles) {
    return Api().post(`users/${usersId}`, profiles);
  },
  putUserInfoById(usersId, profiles) {
    return Api().put(`users/${usersId}`, profiles);
  }
};
