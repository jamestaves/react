import axios from "axios";

export default axios.create({
  baseURL: "https://gastric-essy-isai-48401e66.koyeb.app/api",
  headers: {
    "Content-type": "application/json"
  }
});
