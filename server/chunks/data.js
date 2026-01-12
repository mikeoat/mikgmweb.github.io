import { a2 as attr_class, l as attr, k as escape_html, g as attr_style, a3 as clsx, j as stringify } from "./index2.js";
function AudioPlayer($$payload, $$props) {
  let { src, title } = $$props;
  let time = 0;
  let duration = 0;
  let paused = true;
  function format(time2) {
    if (isNaN(time2)) return "...";
    const minutes = Math.floor(time2 / 60);
    const seconds = Math.floor(time2 % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
  $$payload.out.push(`<div${attr_class(clsx(["player", { paused }]), "svelte-197avi4")}><audio${attr("src", src)}></audio> <button class="play svelte-197avi4"${attr("aria-label", "play")}></button> <div class="info svelte-197avi4"><div class="description svelte-197avi4"><marquee direction="right" behavior="alternate" style="z-index:0; font-size: 50px; font-weight:bold; color: #6699CC; margin-bottom:8px; text-align:left">${escape_html(title)}</marquee></div> <div class="time svelte-197avi4"><span class="svelte-197avi4">${escape_html(format(time))}</span> <div class="slider svelte-197avi4"><div class="progress svelte-197avi4"${attr_style(`--progress: ${stringify(time / duration)}%`)}></div></div> <span class="svelte-197avi4">${escape_html("--:--")}</span></div></div></div>`);
}
const projects = [
  {
    src: "https://raw.githubusercontent.com/mikeoat/music-portfolio/main/l-sys.wav",
    title: "self similarity",
    blurb: "<i>self similarity</i> is an algorithmic electronic piece composed using a sequencer based on l-systems. the sequencer in question was created entirely using lua in the terminal, calling back to the early days of electronic composition tools. because of the primitive techniques used for the composition, primitive sounds were used: filtered sawtooth waves, a 303-style bass, and a CR78-style drum machine. the compositional techniques and timbral makeup of <i>self similarity</i> combine to create a picture of early electronic composition using an l-systems as an organic variation method.",
    tags: ["music"],
    date: "05-06-2025"
  },
  {
    link: "https://github.com/mikeoat/l-system-sequencer",
    title: "l-system sequencer",
    blurb: "a sequencer that makes use of l-systems to generate sequences",
    tags: ["audio programming", "software", "development"],
    date: "05-02-2025"
  },
  {
    link: "https://github.com/mikeoat/walker",
    title: "walker",
    blurb: "a standalone hardware synthesizer that makes use of wave terrain synthesis",
    tags: ["audio programming", "hardware", "development"],
    date: "03-07-2025"
  },
  {
    link: "https://smilleyhasawebsite.com/",
    title: "smilley's website",
    blurb: "website created for the artist smilley",
    tags: ["website", "development"],
    date: "04-20-2023"
  },
  {
    src: "https://raw.githubusercontent.com/mikeoat/music-portfolio/main/ambien.mp3",
    title: "wait for me",
    blurb: "<i>wait for me</i> is a long-form ambient composition created from piano samples and organized algorithmically. the piece explores mental stasis through the repetitions and variations of a single sample. the sample in question is a piano loop that was first recorded on an iphone voice memo, then transferred to a cassette tape loop. both versions of the recording are used throughout the piece, creating a juxtaposition of timbre while maintaining stable ground.",
    tags: ["music"],
    date: "12-12-2022"
  },
  {
    src: "https://raw.githubusercontent.com/mikeoat/music-portfolio/main/the_hash_pinging.wav",
    title: "1neue",
    blurb: "<i>1neue</i> is an experimental electronic piece created entirely using the pinging of resonant effects. a single source sound was used throughout the piece, with variation in timbre arising from parameter modulation. the resulting piece explores the sounds gained using this synthesis method from gentle sequences to harsh noisy drums.",
    tags: ["music"],
    date: "12-06-2022"
  },
  {
    src: "https://raw.githubusercontent.com/mikeoat/music-portfolio/main/heart.flac",
    title: "Repreive",
    blurb: "<i>Reprieve</i> is an dramatic 'IDM' piece with algorithmically composed drums and a chord pattern based on the hirajōshi scale. the overall composition of the piece evokes wistfulness, with soaring leads and a solid harmonic backdrop, held together by a marching glitchy groove.",
    tags: ["music"],
    date: "09-02-2021"
  },
  {
    link: "https://antikszine.neocities.org/",
    title: "antikszine website",
    blurb: "home of the antiks collective's zines (worked alongside <a href='https://lilithmode.neocities.org/'>lilith</a>)",
    tags: ["website", "development"],
    date: "10-31-2025"
  },
  {
    link: "https://github.com/mikeoat/singing-sand",
    title: "Acoustic Simulation of Singing Sand",
    blurb: "a novel synthesis method in which the singing sand dune phenomenon was simulated using the discrete element method (research article pending publishing)",
    tags: ["website", "development"],
    date: "12-11-2025"
  },
  {
    src: "https://raw.githubusercontent.com/mikeoat/music-portfolio/main/extinguish.wav",
    title: "extinguish",
    blurb: "<i>extinguish</i> is a piece composed entirely of white noise processed through a digital mixer and filters. the piece explores the development of feelings throughout a meditative session, beginning with relative chaos and ending with focus and acceptance of that chaos. evoking a sense of movement, automated filters dominate the piece, with spatialized mixer-processed noise samples providing a backdrop. this piece uses the limitations presented by noise and filters to its advantage, sculpting a form by subtracting from chaos, the purest form of information. <i>extinguish</i> presents the idea that by moving with randomness, one may find a way to harness it.",
    tags: ["music"],
    date: "11-26-2025"
  },
  {
    src: "https://raw.githubusercontent.com/mikeoat/music-portfolio/main/wrens_v0-3-2.wav",
    title: "wren",
    blurb: "<i>wren</i> is a musique concrète piece written to mimic the pattern of birdsong. taking inspiration from Varèse’s idea of music as the organization of sound, the piece explores how exactly the form of a piece can be perceived from different timbres presented at different times through the use of limited production techniques in a modern setting. <i>wren’s</i> use of techniques in this way allows for an accentuation of the conversational nature of musical structure itself.",
    tags: ["music"],
    date: "11-12-2025"
  }
];
export {
  AudioPlayer as A,
  projects as p
};
