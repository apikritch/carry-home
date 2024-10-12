import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://apikritch.com/server/carry-home",
  });
};
