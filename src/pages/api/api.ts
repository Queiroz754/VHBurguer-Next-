import axios from "axios";

const apiLocal = "https://localhost:7284/api/"

//criar um endereco da api dentro do axios
export const api = axios.create({
    baseURL: apiLocal
})

