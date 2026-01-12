import { k as escape_html, e as pop, p as push } from "../../../../chunks/index2.js";
import "clsx";
import { h as html } from "../../../../chunks/html.js";
import { marked } from "marked";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out.push(`<main class="svelte-64crn9"><h3>${escape_html(data.post?.slug)}</h3> ${html(marked(Object.values(data.post?.content)[0]))}</main>`);
  pop();
}
export {
  _page as default
};
