import axios from "@/lib/axios";

export type fetchBlogpostsConfig = {
  params: {
    skip?: number;
    take?: number;
    includeUnPublished?: boolean;
  };
};

export const fetchBlogposts = async (config?: fetchBlogpostsConfig) => {
  try {
    const res = await axios.get("/blogposts", { params: config?.params });
    return { ...res.data, statusCode: res.status };
  } catch (error: any) {
    return {
      data: [],
      success: 0,
      msg: "Error in fetching blogposts.",
      statusCode: error.response.status,
    };
  }
};
