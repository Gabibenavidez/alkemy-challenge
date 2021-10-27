import axios from "axios";

export const API = axios.create({
    baseURL: "https://superheroapi.com/api.php/4802541479758297/search/"
});
