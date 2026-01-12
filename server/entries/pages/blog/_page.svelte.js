import { f as ensure_array_like, l as attr, k as escape_html, e as pop, p as push, j as stringify } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.summaries);
  $$payload.out.push(`<h1>blog</h1> <main class="svelte-1yyhykr"><section class="svelte-1yyhykr"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { slug, title, content } = each_array[$$index];
    $$payload.out.push(`<a${attr("href", `blog/${stringify(slug)}`)} class="svelte-1yyhykr"><div class="svelte-1yyhykr"><h3 class="svelte-1yyhykr">${escape_html(title)}</h3> <p class="date svelte-1yyhykr">${escape_html(slug)}</p> <p class="preview svelte-1yyhykr">${escape_html(content.split("\n")[4].substring(0, 50).replaceAll("#", ""))}...</p></div></a>`);
  }
  $$payload.out.push(`<!--]--></section></main>`);
  pop();
}
export {
  _page as default
};
