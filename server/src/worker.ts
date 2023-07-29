
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
	// MOVIE_API: 'https://api.themoviedb.org/3/movie'
	MOVIE_TOKEN: string,
}



const handler: ExportedHandler<Env> = {
	async fetch(request, env) {
		const newRequestInit = {
			// Change method
			method: "GET",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
				// TODO: get rid fo this AND reset token before pushing
				'Authorization': `Bearer ${env.MOVIE_TOKEN}`
			},
		};


		console.log(env.MOVIE_TOKEN)

		const baseURL = "https://api.themoviedb.org/3/movie";
		const workerURL = new URL(request.url);
		const baseEndpointURL = new URL(baseURL);
		
		// TODO: check the requested endpoints against the ones located at client/src/api/movieDB.tsx
		baseEndpointURL.pathname += workerURL.pathname;
		// console.log("pathname: ", baseEndpointURL.pathname)


		// Best practice is to always use the original request to construct the new request
		// to clone all the attributes. Applying the URL also requires a constructor
		// since once a Request has been constructed, its URL is immutable.
		const newRequest: Request = new Request(
			baseEndpointURL.toString(),
			new Request(request, newRequestInit)
		);

		// https://developers.cloudflare.com/workers/examples/logging-headers/
		// let headersObject = Object.fromEntries(request.headers);
		// let requestHeaders = JSON.stringify(headersObject, null, 2);
		// console.log(`Request headers: ${requestHeaders}`);
		
		// console.log(process.env)

		try {
			// TODO: Type complaining here
			return await fetch(newRequest as RequestInfo);
		} catch (e) {

			// TODO: Type complaining here
			return new Response(JSON.stringify({ error: (e as Error).message }), {
			status: 500,
			});
		}
	},
};

export default handler;