import axios from "axios";

export const client = axios.create({
    baseURL : "http://192.168.1.123:4000/api"
    // baseURL : "https://attendly-api.onrender.com/api"
    
});