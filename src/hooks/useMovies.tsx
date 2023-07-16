import { useEffect, useState } from "react"
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse, Endpoints } from '../interfaces/movieInterface';


export const useMovies = () => {

	const [ isLoading, setIsLoading ] = useState(true)
	const [ moviesNowPlaying, setMoviesNowPlaying ] = useState<Movie[]>([])
	const [ moviesPopular, setMoviesPopular ] = useState<Movie[]>([])
	const [ moviesTopRated, setMoviesTopRated ] = useState<Movie[]>([])
	const [ moviesUpcoming, setMoviesUpcoming ] = useState<Movie[]>([])

	useEffect(() => {
		(async () =>{
			// TODO: check potential race condition in the future
			// const moviesNowPlaying = getMovies(Endpoints.now_playing);
			// const moviesPopular = getMovies(Endpoints.popular);
			const [
				moviesNowPlaying,
				moviesPopular,
				moviesTopRated,
				moviesUpcoming,
			] = await Promise.all([
				getMovies(Endpoints.now_playing),
				getMovies(Endpoints.popular),
				getMovies(Endpoints.top_rated),
				getMovies(Endpoints.upcoming),
			])

			setMoviesNowPlaying(() => moviesNowPlaying );
			setMoviesPopular(() => moviesPopular );
			setMoviesTopRated(() => moviesTopRated );
			setMoviesUpcoming(() => moviesUpcoming );

			setIsLoading( () => false )
		}) ();
	}, [])

	return ({
		isLoading,
		moviesInCinema: moviesNowPlaying,
		popularMovies: moviesPopular,
		topRatedMovies: moviesTopRated,
		upcomingMovies: moviesUpcoming,
	})
}

async function getMovies(endpoint: Endpoints ) {
	let movies : Movie[] = [];
	// TODO: handle errors
	const resp = await movieDB.get<MovieDBMoviesResponse>(endpoint)
	movies = resp.data.results;
	return movies
}