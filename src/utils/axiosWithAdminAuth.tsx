import axios from 'axios';

export const axiosWithAdminAuth = () => {
  // returns an "instance" of axios, with preconfigured configs
  const token = JSON.parse(localStorage.getItem('adminToken')|| '{}');
  return axios.create({
    headers: {
      Authorization: token,
      "Access-Control-Allow-Origin": "*"
    },
    baseURL: 'https://ctl-shop.herokuapp.com/api/admin'
    // baseURL: 'http://localhost:5000/api/admin'
  });
};
