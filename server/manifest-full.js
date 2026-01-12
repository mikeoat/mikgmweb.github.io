export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set([".nojekyll","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"app/immutable/entry/start.C_Otaxpn.js",app:"app/immutable/entry/app.DeD2x6NQ.js",imports:["app/immutable/entry/start.C_Otaxpn.js","app/immutable/chunks/vRniKS_b.js","app/immutable/chunks/DzxXmuGy.js","app/immutable/chunks/CdddOkKk.js","app/immutable/chunks/6Jab4rmA.js","app/immutable/entry/app.DeD2x6NQ.js","app/immutable/chunks/PPVm8Dsz.js","app/immutable/chunks/DzxXmuGy.js","app/immutable/chunks/DHdBkak8.js","app/immutable/chunks/6Jab4rmA.js","app/immutable/chunks/BFjADP4c.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
