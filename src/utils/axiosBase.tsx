import axios from 'axios';

export const axiosBase = () =>{
    return axios.create({
        // baseURL: 'https://ctl-shop.herokuapp.com/api/'
    baseURL: 'http://localhost:5000/api/'
    })
}