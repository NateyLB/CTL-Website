import axios from "axios";
/**
 * @desc axios request with a base URL
 */
export const axiosBase = () => {
  return axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // baseURL: 'https://ctl-shop.herokuapp.com/api/'
    baseURL: "http://localhost:5000/api/",
  });
};
