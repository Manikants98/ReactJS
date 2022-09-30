import axios from "../../config/axios";
import { API_URLS } from "../../config/apiUrls";

export const getCourseFn = () => {
  try {
    const response = axios.get(API_URLS.getCourses);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
