import axios from "axios";

export const client = axios.create({
    baseURL : "https://attendly-api.onrender.com/api"
});