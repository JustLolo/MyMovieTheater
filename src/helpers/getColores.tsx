import ImageColors from "react-native-image-colors"

// export const getImagePosterColors = async ( index: number) => {
export const getImageColors = async ( uri:string ) => {
	// const movie = movies.nowPlaying[index];
	// const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

	const colors = await ImageColors.getColors(uri, {})
	// console.log({colors})

	let primary;
	let secundary;

	if (colors.platform === 'android') {
		primary = colors.dominant;
		secundary = colors.average;
	} else if (colors.platform === 'ios') {
		primary = colors.primary;
		secundary = colors.secondary;
	}
	else {
		// web, not being used
		// const backgrounColor = colors.dominant;
	}

	return [ primary, secundary ]
	// console.log(movie.title, uri)
}