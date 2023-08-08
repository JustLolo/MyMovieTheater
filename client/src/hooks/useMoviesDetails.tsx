import { useEffect, useState } from 'react';
import { getMovieCredits, getMovieDetail } from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
	isLoading: boolean,
	movieFull?: MovieFull,
	cast: Cast[];
}

export const useMoviesDetails = (movieId: number) => {
	const [state , setState] = useState<MovieDetails>({
		isLoading: true,
		movieFull: undefined,
		cast: []
	})


	useEffect(() => {
		let ignore = false;
		(async () => {
			const data = await Promise.all([
				getMovieDetail(movieId),
				getMovieCredits(movieId),
			]);

			if (data.some(d => d === undefined)) {
				return
			}

			const [
				movieDetails,
				movieCredits]
			= data
			
			setState({
				isLoading: false,
				movieFull: movieDetails,
				cast: movieCredits!.cast
			});

		})();
	}, [])
	

  	return {
		...state
	}
}