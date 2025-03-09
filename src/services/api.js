import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-sistema-controle-gp7-production.up.railway.app"
});