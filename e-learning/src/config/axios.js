import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todos-mine.herokuapp.com",
});

export default axiosInstance;
