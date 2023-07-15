import axios from 'axios'

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

export default movieDB;