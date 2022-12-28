import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:7000/api",
  baseURL: 'https://healthtrackerrest-production-f63f.up.railway.app/api',
  headers: {

    "Content-type": "application/json"
  }
});
