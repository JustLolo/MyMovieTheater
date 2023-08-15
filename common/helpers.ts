import { Movie, MovieFull } from '../client/src/interfaces/movieInterface';
import { CreditsResponse } from '../client/src/interfaces/creditsInterface';

type Props = Promise<Movie[]> | Promise<MovieFull> | Promise<CreditsResponse> | Promise<string[]>
// async function handleError(promise: Props) {
// 	try {
// 		const data = await promise;
// 		return [data, null]
// 	} catch (error) {
// 		console.error(error)
// 		return [null, error];
// 	}
// }

export async function handleError<T>(promise: Promise<T>): Promise<[T | null, any]> {
	// TODO: search for every handleError, if it's using a network call, show a notification on error
	// check react navigation for the previous statement
	try {
		const data = await promise;
		return [data, null]
	} catch (error) {
		// TODO: types for error
		// console.error(error)
		return [null, error];
	}
}