import axios from "axios";

const api = axios.create({
  baseURL: "http://59669f9c.ngrok.io"
});

export default api;
