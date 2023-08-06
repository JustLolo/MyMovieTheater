import axios from 'axios'
import { Movie, MovieDBResponse, MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse } from '../interfaces/creditsInterface';
import { API_BASE_URL, API_TOKEN } from '@env';
import { handleError } from '../../../common/helpers';

const movieDB = axios.create({
	baseURL: API_BASE_URL,
	method: 'get',
	maxBodyLength: Infinity,
	params: {
		language: 'en-US'
	},
	headers: { 
		'Origin': 'https://developer.themoviedb.org', 
		'Authorization': `Bearer ${API_TOKEN}`,
		// 'Cache-Control': 'no-store'  // not caching, for dev purposes
	}
});

export async function getMovies(endpoint: GenericEndpoints ) {
	let movies : Movie[] = [];
	// TODO: handle errors
	handleError(movieDB.get<MovieDBResponse>(pathBuilder(endpoint)))

	// const [resp, error] = await handleError(movieDB.get<MovieDBResponse>(pathBuilder(endpoint)))
	// if (error) {
	// 	return false
	// }


	const resp = await movieDB.get<MovieDBResponse>(pathBuilder(endpoint))
	movies = resp!.data.results;
	return movies
}

// function handleError(arg0: Promise<AxiosResponse<MovieDBResponse, any>>) {
// 	throw new Error('Function not implemented.');
// }


// function handleError(arg0: AxiosResponse<MovieDBResponse, any>) {
// 	throw new Error('Function not implemented.');
// }

export async function getMovieDetail(id: number) {
	// TODO: handle errors
	handleError(movieDB.get<MovieFull>(pathBuilder('', id)));

	const resp = await movieDB.get<MovieFull>(pathBuilder('', id))
	return resp.data
}

export async function getMovieCredits(id: number) {
	// TODO: handle errors
	handleError(movieDB.get<CreditsResponse>(pathBuilder('/credits', id)));

	const resp = await movieDB.get<CreditsResponse>(pathBuilder('/credits', id))
	return resp.data
}

// TODO: use the types located at common/types.ts
export type GenericEndpoints = "/now_playing" | "/popular" | "/top_rated" | "/upcoming";
export type IdEndpoints = "/credits" | ``;
export type Endpoints = GenericEndpoints | IdEndpoints;

export function pathBuilder (endpoint: GenericEndpoints ): string;
export function pathBuilder (endpoint: IdEndpoints, id: number): string;
export function pathBuilder <T extends GenericEndpoints | IdEndpoints> (endpoint: T, id?: number): string {
	let path = '';
	if (id != undefined) {
		path += '/' + id.toString()
	}

	path += endpoint
	return path;
}

// This solution looks 'smarter', but it's extremelly hard to read if you don't know a lot about generics
// function pathBuilder 
// <T extends GenericEndpoints | IdEndpoints> (
// 	endpoint: T, 
// 	...id: (T extends IdEndpoints ? [string] : []) ): string {
// 		let path = '';
// 		if (id[0] != undefined) {
// 			path += '/' + id[0]
// 		}
// 		path += endpoint
// 		return path;
// }


export class Convert {
	// TODO: `improve` this validation/covertion
    public static toMovieDB(json: string): MovieDBResponse {
        return JSON.parse(json);
    }

    public static movieDBToJson(value: MovieDBResponse): string {
        return JSON.stringify(value);
    }

    public static toMovie(json: string): Movie {
        return JSON.parse(json);
    }

    public static movieToJson(value: Movie): string {
        return JSON.stringify(value);
    }

    public static toMovieDetails(json: string): MovieFull {
        return JSON.parse(json);
    }

    public static movieDetailsToJson(value: MovieFull): string {
        return JSON.stringify(value);
    }

    public static toMovieCredits(json: string): CreditsResponse {
        return JSON.parse(json);
    }

    public static movieCreditsToJson(value: CreditsResponse): string {
        return JSON.stringify(value);
    }
}

export default movieDB;