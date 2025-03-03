import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://doctimebackendd.onrender.com"
});

export default axiosInstance;
