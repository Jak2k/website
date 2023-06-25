export default async function useBlog(limit: number | false = false) {
  const { data: posts } = await useAsyncData("posts", () => {
    const q = queryContent();
    if (limit) {
      q.limit(limit);
    }
    return q.find();
  });

  return posts;
}
