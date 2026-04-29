import axios from "axios";

const apiLocal = "https://localhost:7284/api/"


export const api = axios.create({
    baseURL: apiLocal
})

