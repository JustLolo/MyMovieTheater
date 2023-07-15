import { useEffect, useState } from "react"
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface"

export const useMovies = () => {

	const [ isLoading, setIsLoading ] = useState(true)
	const [ moviesInCinema, setMoviesInCinema ] = useState<Movie[]>([])

	async function getMovies() {
		let movies : Movie[] = [];
		const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
		movies = resp.data.results;
		return movies
	}

	// const getMovies = async () => {
	// 	const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
	// 	// setMoviesInCinema(resp.data.results);
	// 	return resp.data.results
	// 		// .then(resp =>)

		
	// }

	useEffect(() => {
		(async () =>{
			// TODO: check potential race condition in the future
			const movies = await getMovies();
			// console.log(movies);
			setMoviesInCinema( () => movies );
			setIsLoading( () => false )
			// setMoviesInCinema(await getMovies())
		}) ();
	}, [])

	return ({
		isLoading,
		moviesInCinema
	})
}