import axios from "../../config/axios";
import { API_URLS } from "../../config/apiUrls";

export const users = () => {
  try {
    const response = axios.get(API_URLS.users);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
