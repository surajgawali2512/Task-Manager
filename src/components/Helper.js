import axios from "axios";

export const BASE_URL = "http://localhost:8096";

export const myAxios = axios.create({
  baseURL: BASE_URL
});
