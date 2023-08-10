import { isValidEndpoint, isValidParams, params } from '../../common/types';

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
			method: "GET",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${env.MOVIE_TOKEN}`
			},
		};

		const baseURL = "https://api.themoviedb.org/3/movie";
		const baseEndpointURL = new URL(baseURL);

		const workerURL = new URL(request.url);
		
		// checking for valid param
		const workerQueryString = workerURL.search.slice(1).split('&')
		for (let query of workerQueryString) {
			const [k, v] = query.split('=');
			if (!isValidParams(k)) {
				return new Response(JSON.stringify(`${k} is not a valid Param`), {
					status: 400,
				});
			}
		}

		baseEndpointURL.pathname += workerURL.pathname;
		baseEndpointURL.search = workerURL.search;
		// console.log(workerURL.search)


		const endpoint = `/${workerURL.pathname.split('/')[1]}`;
		
		if (!isValidEndpoint(endpoint)) {
			return new Response(JSON.stringify( 'Invalid endpoint' ), {
				status: 404,
			});
		}


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
		
		// log params
		// const params: any = {};
		// const url = new URL(request.url);
		// const queryString = url.search.slice(1).split('&')

		// queryString.forEach(item => {
		// 	const kv = item.split('=')
		// 	if (kv[0]) params[kv[0]] = kv[1] || true
		// })
		// console.log(`Request Params: ${JSON. stringify(params)}`);
		
		console.log(newRequest.url)

		try {
			return await fetch(newRequest as RequestInfo);
		} catch (e) {
			return new Response(JSON.stringify({ error: (e as Error).message }), {
				status: 500,
			});
		}
	},
};

export default handler;