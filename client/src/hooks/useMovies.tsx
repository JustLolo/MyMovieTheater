import { useEffect, useState } from "react"
import { getMovies } from '../api/movieDB';
import { Movie } from '../interfaces/movieInterface';

interface MoviesState {
	nowPlaying: Movie[],
	popular: Movie[],
	topRated: Movie[],
	upcoming: Movie[],
}

export const useMovies = () => {
	const [ isLoading, setIsLoading ] = useState(true)
	const [moviesState, setMovieState] = useState<MoviesState>({
		nowPlaying: [],
		popular: [],
		topRated: [],
		upcoming: [],
	});

	useEffect(() => {
		(async () =>{
			const data = await Promise.all([
				// TODO: check potential antipattern
				getMovies('/now_playing'),
				getMovies('/popular'),
				getMovies('/top_rated'),
				getMovies('/upcoming'),
			]);

			if (data.some(d => d.length === 0)) {
				return
			}

			const [
				nowPlaying,
				popular,
				topRated,
				upcoming] = data;

			// TODO: Refactor this even more, use typeof and keyof to simplify this whole repetition
			setMovieState({
				nowPlaying,
				popular,
				topRated,
				upcoming,
			})
			setIsLoading( false )

		}) ();
	}, [])

	return ({
		isLoading,
		movies: moviesState,
	})
}