import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7000",
  // baseURL: 'https://healthtrackerrest-production-f63f.up.railway.app/api',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json"
  }
});
