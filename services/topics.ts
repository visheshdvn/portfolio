import axios from "@/lib/axios";

export const fetchTopics = async (config?: {
  skip?: number;
  take?: number;
}) => {
  try {
    const res = await axios.get("/topics");
    return { ...res.data, statusCode: res.status };
  } catch (error) {}
};
