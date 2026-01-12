import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0._d60q2fk.js","app/immutable/chunks/DHdBkak8.js","app/immutable/chunks/DzxXmuGy.js","app/immutable/chunks/6Jab4rmA.js","app/immutable/chunks/BbhVpj2e.js","app/immutable/chunks/SsrO7awh.js","app/immutable/chunks/DJmLRMDG.js","app/immutable/chunks/vRniKS_b.js","app/immutable/chunks/CdddOkKk.js"];
export const stylesheets = ["app/immutable/assets/0.DIbWkyoA.css"];
export const fonts = [];
