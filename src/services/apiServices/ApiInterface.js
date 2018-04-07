import axios from "axios";


export class ApiInterface {
  static baseUrl() {
    const envBaseUrl = process.env.BASE_URL;
    return envBaseUrl ? envBaseUrl : "http://localhost:8080";
  }

  static get(uri) {
    return axios.get(`${ApiInterface.baseUrl()}${uri}`);
  }
}
