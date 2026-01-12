import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["app/immutable/nodes/5.YDAJR59Z.js","app/immutable/chunks/DHdBkak8.js","app/immutable/chunks/DzxXmuGy.js","app/immutable/chunks/2d8pJOiI.js"];
export const stylesheets = ["app/immutable/assets/5.Ds14ns0d.css"];
export const fonts = [];
