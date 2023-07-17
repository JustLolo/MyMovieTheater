import { useEffect, useState } from 'react';
import { getMovieCredits, getMovieDetail } from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
	isLoading: boolean,
	// TODO: remove this optional
	movieFull?: MovieFull,
	cast: Cast[];
}

export const useMoviesDetails = (movieId: number) => {
	const [state , setState] = useState<MovieDetails>({
		isLoading: true,
		movieFull: undefined,
		cast: []
	})

	// TODO: remove this optional
	// console.log(state.movieFull?.title)

	useEffect(() => {
		(async () => {
			// getMovieDetail('/credits', movieId)
			// const movieDetails = await getMovieDetail(movieId);
			// const movieCredits = await getMovieCredits(movieId);

			// TODO: check error management and race condition
			const [
				movieDetails,
				movieCredits,
			] = await Promise.all([
				// TODO: check potential antipattern
				getMovieDetail(movieId),
				getMovieCredits(movieId),
			]);

			setState({
				isLoading: false,
				movieFull: movieDetails,
				cast: movieCredits.cast
			});

		})();
	}, [])
	

  	return {
		...state
	}
}