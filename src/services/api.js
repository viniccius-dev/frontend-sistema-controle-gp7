import axios from "axios";

export const api = axios.create({
    baseURL: "https://gp7-controle.viniciusdeveloper.com"
});