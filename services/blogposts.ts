import axios from "@/lib/axios";

export const fetchBlogposts = async (config?: {
  params: {
    skip?: number;
    take?: number;
    includeUnPublished?: boolean;
  };
}) => {
  try {
    const res = await axios.get("/blogposts", { params: config?.params });
    return { ...res.data, statusCode: res.status };
  } catch (error) {}
};
