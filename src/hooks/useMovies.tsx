import { useEffect, useState } from "react"
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse, Endpoints } from '../interfaces/movieInterface';

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
			// TODO: check potential race condition in the future
			const [
				nowPlaying,
				popular,
				topRated,
				upcoming,
			] = await Promise.all([
				getMovies(Endpoints.now_playing),
				getMovies(Endpoints.popular),
				getMovies(Endpoints.top_rated),
				getMovies(Endpoints.upcoming),
			]);

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

async function getMovies(endpoint: Endpoints ) {
	let movies : Movie[] = [];
	// TODO: handle errors
	const resp = await movieDB.get<MovieDBMoviesResponse>(endpoint)
	movies = resp.data.results;
	return movies
}