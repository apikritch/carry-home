import Api from "@/services/Api";

export default {
  signup(credentials) {
    return Api().post("signup", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  },
  getUserById(usersId) {
    return Api().get(`user/${usersId}`);
  },
  putUserById(usersId, profile) {
    return Api().put(`user/${usersId}`, profile);
  },
  putPasswordById(usersId, credentials) {
    return Api().put(`user/password/${usersId}`, credentials);
  }
};
