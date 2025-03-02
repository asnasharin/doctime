import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://doctimebackend.onrender.com"
});

export default axiosInstance;
