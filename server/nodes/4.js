import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["app/immutable/nodes/4.DeeP_ay_.js","app/immutable/chunks/DHdBkak8.js","app/immutable/chunks/DzxXmuGy.js","app/immutable/chunks/BbhVpj2e.js"];
export const stylesheets = ["app/immutable/assets/4.QEKTgwAq.css"];
export const fonts = [];
