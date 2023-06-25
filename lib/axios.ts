import axios from "axios";

const developmentInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

const productionInstance = axios.create({
  baseURL: "https://visheshdhawan.com/api/",
});

const exportedInstane =
  process.env.NODE_ENV === "development"
    ? developmentInstance
    : productionInstance;

export default exportedInstane;
