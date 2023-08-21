import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://127.0.0.1:3300/api/",
  withCredentials: true,
});

export default newRequest;