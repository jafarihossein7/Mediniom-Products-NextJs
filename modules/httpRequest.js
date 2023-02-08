import axios from "axios";

// let serverAxios = axios.create({ baseURL: "https://api.mediniom.com/api/v2" });


export function get(url, config = {}) {
  return axios.get(url, config);
}
