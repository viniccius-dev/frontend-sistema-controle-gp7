import axios from "axios";

export const api = axios.create({
    baseURL: "https://www.gp7-controle.viniciusdeveloper.com"
});