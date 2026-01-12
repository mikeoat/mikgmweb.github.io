import { f as ensure_array_like, k as escape_html, a0 as await_block, a1 as bind_props, e as pop, p as push, l as attr, j as stringify } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
const people = [
  {
    name: "belle cirino",
    link: "https://www.bcaudio.net/",
    notes: ["live sound", "musician", "producer", "nerd", "we go way back"]
  },
  {
    name: "lilith",
    link: "https://lilithmode.neocities.org/",
    notes: ["musician", "producer", "nerd", "programmer"]
  },
  {
    name: "Smilley",
    link: "https://smilleyhasawebsite.com/",
    notes: ["musician", "producer", "we go way back"]
  },
  {
    name: "jacob",
    link: "https://linktr.ee/jacobdurbin?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    notes: ["musician", "producer", "influencer"]
  },
  {
    name: "wolfie",
    link: "https://soundcloud.com/wolfiei",
    notes: ["musician", "producer"]
  },
  {
    name: "dooho",
    link: "https://www.instagram.com/dooho.han/",
    notes: ["musician", "producer", "nerd", "hardware"]
  },
  {
    name: "nat",
    link: "https://www.instagram.com/natalieguerrra/",
    notes: ["CNA", "nerd", "we go way back"]
  },
  {
    name: "lily",
    link: "https://www.instagram.com/lil._.e_/",
    notes: ["family", "we go way back"]
  },
  {
    name: "jojoberrydrummer",
    link: "https://www.instagram.com/jojoberrydrummer/",
    notes: ["musician", "drummer"]
  },
  {
    name: "michelle langelier",
    link: "https://www.instagram.com/michelle.langelier/",
    notes: ["musician", "teacher", "we go way back"]
  }
];
function _page($$payload, $$props) {
  push();
  const get = async () => {
    const allimgsf = /* @__PURE__ */ Object.assign({ "/src/lib/assets/img/_roly-saynotoweb3.gif": () => import("../../../chunks/_roly-saynotoweb3.js"), "/src/lib/assets/img/_sucks2.gif": () => import("../../../chunks/_sucks2.js"), "/src/lib/assets/img/_web.gif": () => import("../../../chunks/_web.js"), "/src/lib/assets/img/alliens.gif": () => import("../../../chunks/alliens.js"), "/src/lib/assets/img/antinazi.gif": () => import("../../../chunks/antinazi.js"), "/src/lib/assets/img/bestview.gif": () => import("../../../chunks/bestview.js"), "/src/lib/assets/img/bitwarden.gif": () => import("../../../chunks/bitwarden.js"), "/src/lib/assets/img/bufreepalestine.gif": () => import("../../../chunks/bufreepalestine.js"), "/src/lib/assets/img/chrmevil.gif": () => import("../../../chunks/chrmevil.js"), "/src/lib/assets/img/ddg.gif": () => import("../../../chunks/ddg.js"), "/src/lib/assets/img/debian-powered.gif": () => import("../../../chunks/debian-powered.js"), "/src/lib/assets/img/fftake.gif": () => import("../../../chunks/fftake.js"), "/src/lib/assets/img/internetprivacy.gif": () => import("../../../chunks/internetprivacy.js"), "/src/lib/assets/img/pear.gif": () => import("../../../chunks/pear.js"), "/src/lib/assets/img/shr.gif": () => import("../../../chunks/shr.js"), "/src/lib/assets/img/spongebob_flag_twirlers_stamp_by_cassiecros13_d9q3om5.gif": () => import("../../../chunks/spongebob_flag_twirlers_stamp_by_cassiecros13_d9q3om5.js"), "/src/lib/assets/img/zda3ek9i-3571bc83-3845-4101-976d-3e45df1bc511.gif": () => import("../../../chunks/zda3ek9i-3571bc83-3845-4101-976d-3e45df1bc511.js") });
    const iterableImages = Object.entries(allimgsf);
    const allimgs = await Promise.all(iterableImages.map(async ([path, resolver]) => {
      const metadata = await resolver();
      const imgPath = path.slice(2, -3);
      return { meta: metadata, path: imgPath };
    }));
    return allimgs;
  };
  const each_array = ensure_array_like(people);
  $$payload.out.push(`<h1>about</h1> <main class="svelte-1ul6k27"><h2>bio</h2> <div class="svelte-1ul6k27"><p style="font-size:x-large; line-height:200%;" class="svelte-1ul6k27">i'm mike mcdonald, an audio programmer, sound designer, and musician. i have chosen this path 
        because of my interest in technology and music that has consumed me for my entire life. i use my experience gained from <a href="https://governors.pwcs.edu/" class="svelte-1ul6k27">the governor's
        school @ innovation park</a> and <a href="https://www.berklee.edu/" class="svelte-1ul6k27">berklee college of music</a> in order to create <a href="/projects" class="svelte-1ul6k27">devices for creativity</a>, <a href="/projects" class="svelte-1ul6k27">build instruments</a>, and <a href="https://www.lmthegame.com/" class="svelte-1ul6k27">design sounds for games</a>. the creation of novel tools and new
        experiences bring me great joy. creation is what makes us human and providing tools for that creation is of major interest to me. 
        outside of audio, i also do some web development. information about some of the projects i've worked on can be found on my <a href="projects" class="svelte-1ul6k27">projects page</a>.</p></div> <h2>status</h2> <div id="statuscafe" class="svelte-1ul6k27"><div id="statuscafe-username" class="svelte-1ul6k27"></div><div id="statuscafe-content" class="svelte-1ul6k27"></div></div><script src="https://status.cafe/current-status.js?name=mikeoat" defer><\/script> <h2>cool people</h2> <div style="display:flex; flex-flow: row wrap; justify-content:center;" class="svelte-1ul6k27"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let person = each_array[$$index_1];
    const each_array_1 = ensure_array_like(person.notes);
    $$payload.out.push(`<button class="svelte-1ul6k27"><p style="text-align:center;" class="svelte-1ul6k27">${escape_html(person.name)}</p> `);
    if (person.link.match("instagram")) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<p style="font-size:15px; color:red; text-align:center;" class="svelte-1ul6k27">! opens instagram !</p>`);
    } else {
      $$payload.out.push("<!--[!-->");
      if (person.link.match("soundcloud")) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<p style="font-size:15px; color:red; text-align:center;" class="svelte-1ul6k27">! opens soundcloud !</p>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]--> <div class="tagContainer svelte-1ul6k27"><!--[-->`);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$payload.out.push(`<div class="tag svelte-1ul6k27"><p class="svelte-1ul6k27">${escape_html(tag)}</p></div>`);
    }
    $$payload.out.push(`<!--]--></div></button>`);
  }
  $$payload.out.push(`<!--]--></div> <h2>buttons and gifs i like</h2> <div style="display:flex; flex-flow: row wrap; justify-content:center;" class="svelte-1ul6k27">`);
  await_block(
    $$payload,
    get(),
    () => {
      $$payload.out.push(`<p class="svelte-1ul6k27">loading...</p>`);
    },
    (allimgs) => {
      const each_array_2 = ensure_array_like(allimgs);
      $$payload.out.push(`<!--[-->`);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let path = each_array_2[$$index_2];
        $$payload.out.push(`<img style="max-height:100px; padding:5px;"${attr("src", `s${stringify(path.path)}gif`)} alt="" class="svelte-1ul6k27"/>`);
      }
      $$payload.out.push(`<!--]-->`);
    }
  );
  $$payload.out.push(`<!--]--></div> <div style="height:100px; border:none;" class="svelte-1ul6k27"></div></main>`);
  bind_props($$props, { get });
  pop();
}
export {
  _page as default
};
