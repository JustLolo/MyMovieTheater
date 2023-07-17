import axios from 'axios'
import { Movie, MovieDBMoviesResponse, MovieFull } from '../interfaces/movieInterface';

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	method: 'get',
	maxBodyLength: Infinity,
	params: {
		language: 'en-US'
	},
	headers: { 
		// TODO: Create environment variables
		// TODO: Reset this API key key before pushing to github
		'Origin': 'https://developer.themoviedb.org', 
		'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmUwOTliNDI5MDVhZjQ0Mzk3MGVjMjM2N2I5NzI5MiIsInN1YiI6IjY0YjA4OGYyZDIzNmU2MDEzOWIyZWM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-iLnV5VxGB08ouqfH9h-OnkR8j8BO00tbSLMIhZkfzI'
	}
});

export async function getMovies(endpoint: GenericEndpoints ) {
	let movies : Movie[] = [];
	// TODO: handle errors
	const resp = await movieDB.get<MovieDBMoviesResponse>(pathBuilder(endpoint))
	movies = resp.data.results;
	return movies
}

async function getMovieDetail(endpoint: IdEndpoints ) {
	// TODO: handle errors
	const resp = await movieDB.get<MovieFull>(endpoint)
	return resp.data
}

export type GenericEndpoints = "/now_playing" | "/popular" | "/top_rated" | "/upcoming";
export type IdEndpoints = "/credits" | ``;
export type Endpoints = GenericEndpoints | IdEndpoints;

export function pathBuilder (endpoint: GenericEndpoints ): string;
export function pathBuilder (endpoint: IdEndpoints, id: string): string;
export function pathBuilder <T extends GenericEndpoints | IdEndpoints> (endpoint: T, id?: string): string {
	let path = '';
	if (id != undefined) {
		path += '/' + id[0]
	}

	path += endpoint
	return path;
}

// This solution looks 'smarter', but it's extremelly read if you don't know a lot about generics
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


export default movieDB;