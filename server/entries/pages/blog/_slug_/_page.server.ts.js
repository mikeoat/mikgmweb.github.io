import { p as posts } from "../../../../chunks/data2.js";
function load({ params }) {
  const post = posts.find((post2) => post2.slug === params.slug);
  return {
    post
  };
}
export {
  load
};
