import axios from "axios";

const API = axios.create({
  baseURL: "https://student-management-application-5i4k.onrender.com",
});




// token auto attach
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
