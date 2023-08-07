import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "http://portfolio.apikritch.com:8003/",
  });
};
