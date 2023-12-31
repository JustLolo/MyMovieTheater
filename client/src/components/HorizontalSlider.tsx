import { FlatList, Text, View } from "react-native"
import { Movie } from "../interfaces/movieInterface"
import { MoviePoster } from "./MoviePoster"

interface Props {
	title?: string
	movies: Movie[]
	cardsSeparation?: number
}

export const HorizontalSlider = ({ title='', movies, cardsSeparation=9 }: Props) => {

	return (
		<View style={{ 
			paddingLeft: cardsSeparation,
		}}>
			{title !== '' 
				&&
				<Text style={{
					fontSize: 30,
					fontWeight: 'bold',
					paddingLeft: 5,
				}}>{title}</Text>
			}

			<FlatList
				data={movies}
				renderItem={({ item }) => (
					<MoviePoster movie={item} width={140} height={200}/>
				)}
				
				ItemSeparatorComponent={() => 
					<View style={{ width: cardsSeparation }}></View>
				}

				keyExtractor={( movie ) => movie.id.toString()}
				showsHorizontalScrollIndicator={false}
				horizontal
			/>
		</View>
	)
}