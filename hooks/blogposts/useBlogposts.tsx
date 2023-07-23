import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchBlogposts, fetchBlogpostsConfig } from "@/services/blogposts";

export type fetchingStatus = "idle" | "fetching";

export function useBlogposts(config?: fetchBlogpostsConfig) {
  const [data, setData] = useState<[any] | null>(null);
  // State to keep track of loading status
  const [loading, setLoading] = useState<boolean>(true);
  // State to store error information
  const [error, setError] = useState<string | null>(null);

  const getBlogposts = useCallback(async () => {
    setLoading(true);
    const { success, msg, data } = await fetchBlogposts(config);

    if (success == 1) {
      setLoading(false);
      setError(null);
      setData(data);
    } else {
      setLoading(false);
      setError(msg);
    }
  }, [config]);

  const memoizedFetchData = useMemo(() => getBlogposts, [getBlogposts]);

  useEffect(() => {
    getBlogposts();
  }, []);

  return { loading, error, data, setData, refetch: memoizedFetchData };
}
