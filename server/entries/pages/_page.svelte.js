import { f as ensure_array_like, l as attr, k as escape_html, j as stringify, e as pop, p as push } from "../../chunks/index2.js";
import { f as favicon } from "../../chunks/favicon.js";
import { p as projects, A as AudioPlayer } from "../../chunks/data.js";
import { p as posts } from "../../chunks/data2.js";
import { h as html } from "../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let sortedProjects = projects.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  const sortedProjectsTrunc = sortedProjects.slice(0, 3);
  const postsTrunc = posts.slice(0, 3);
  const each_array = ensure_array_like(sortedProjectsTrunc);
  const each_array_3 = ensure_array_like(postsTrunc);
  $$payload.out.push(`<main class="svelte-1hy65sb"><img style="max-width:100px; margin-bottom:10px;"${attr("src", favicon)} alt="mike's logo"/> <h1 style="position:absolute;" class="svelte-1hy65sb"><u>m</u>ike's <u>o</u>nline <u>t</u>hing <u>e</u>xhibition</h1> <div style="height:250px;"></div> <h2>recent projects</h2> <!--[-->`);
  for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
    let project = each_array[$$index_2];
    if (project.link) {
      $$payload.out.push("<!--[-->");
      const each_array_1 = ensure_array_like(project.tags);
      $$payload.out.push(`<section class="svelte-1hy65sb"><div class="title svelte-1hy65sb"><button class="see-project svelte-1hy65sb"><h2 class="svelte-1hy65sb"><svg width="40" height="40" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1hy65sb"><path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" fill="currentColor"></path><path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" fill="currentColor"></path><path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" fill="currentColor"></path></svg>${escape_html(project.title)}</h2></button> <h3 class="svelte-1hy65sb">${escape_html(project.date)}</h3></div> <div class="content svelte-1hy65sb"><p style="text-align:right; margin-right:0px; margin-bottom:8px;" class="svelte-1hy65sb">${html(project.blurb)}</p> <div style="margin-bottom:8px; padding-right:8px; display:flex; justify-content:right; flex-wrap:wrap;"><!--[-->`);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tag = each_array_1[$$index];
        $$payload.out.push(`<p class="tag svelte-1hy65sb">${escape_html(tag)}</p>`);
      }
      $$payload.out.push(`<!--]--></div></div></section>`);
    } else {
      $$payload.out.push("<!--[!-->");
      const each_array_2 = ensure_array_like(project.tags);
      $$payload.out.push(`<section class="svelte-1hy65sb"><div class="title svelte-1hy65sb"><div class="see-project svelte-1hy65sb">`);
      AudioPlayer($$payload, { title: project.title, src: project.src });
      $$payload.out.push(`<!----></div> <h3 class="svelte-1hy65sb">${escape_html(project.date)}</h3></div> <div class="content svelte-1hy65sb"><p style="text-align:right; margin-right:0px; margin-bottom:8px;" class="svelte-1hy65sb">${html(project.blurb)}</p> <div style="margin-bottom:8px; padding-right:8px; display:flex; justify-content:right; flex-wrap:wrap;"><!--[-->`);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let tag = each_array_2[$$index_1];
        $$payload.out.push(`<button class="tag svelte-1hy65sb">${escape_html(tag)}</button>`);
      }
      $$payload.out.push(`<!--]--></div></div></section>`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--> <section class="svelte-1hy65sb"><div class="title svelte-1hy65sb"><a href="/projects" class="svelte-1hy65sb"><button class="see-project svelte-1hy65sb"><h2 class="svelte-1hy65sb"><svg width="40" height="40" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1hy65sb"><path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" fill="currentColor"></path><path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" fill="currentColor"></path><path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" fill="currentColor"></path></svg>see more</h2></button></a></div></section> <h2>recent blog posts</h2> <div style="display:flex; flex-direction:column; justify-content:space-between;"><!--[-->`);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let post = each_array_3[$$index_3];
    $$payload.out.push(`<a${attr("href", `blog/${stringify(post.slug)}`)} class="svelte-1hy65sb"><div class="blogdiv svelte-1hy65sb" style="margin:4px;"><h3 class="svelte-1hy65sb">${escape_html(post.title)}</h3> <p class="date svelte-1hy65sb">${escape_html(post.slug)}</p></div></a>`);
  }
  $$payload.out.push(`<!--]--></div></main> <div style="height:100px"></div>`);
  pop();
}
export {
  _page as default
};
