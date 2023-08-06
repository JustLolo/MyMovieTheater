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

export async function handleError<T>(promise: T): Promise<[T | null, any]> {
	try {
		const data = await promise;
		return [data, null]
	} catch (error) {
		
		console.error(error)
		return [null, error];
	}
}