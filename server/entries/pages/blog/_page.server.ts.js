import { p as posts } from "../../../chunks/data2.js";
function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      content: Object.values(post.content)[0]
    }))
  };
}
export {
  load
};
