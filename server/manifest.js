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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/blog","/blog/__data.json","/projects","/blog/04-25-2025","/blog/04-25-2025/__data.json","/blog/04-05-2025","/blog/04-05-2025/__data.json","/blog/04-01-2025","/blog/04-01-2025/__data.json","/blog/03-10-2025","/blog/03-10-2025/__data.json","/blog/03-06-2025","/blog/03-06-2025/__data.json","/blog/12-23-2024","/blog/12-23-2024/__data.json","/blog/12-04-2024","/blog/12-04-2024/__data.json","/blog/11-04-2024","/blog/11-04-2024/__data.json","/blog/09-04-2024","/blog/09-04-2024/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
