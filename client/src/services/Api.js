import axios from "axios";

export default () => {
  return axios.create({
    baseURL:
      "http://ec2-3-24-204-164.ap-southeast-2.compute.amazonaws.com:8081/",
  });
};
