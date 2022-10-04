import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todos-mine.herokuapp.com",
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.data?.message) {
      alert(error?.response?.data?.message);
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
