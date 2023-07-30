import { Text, View, FlatList } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';

interface Props {
	movieFull: MovieFull;
	cast: Cast[];
}

export const MovieDetails = ({ movieFull , cast}: Props) => {
	// console.log(movieFull);

	return (
		<>
		
			<View style={{ marginHorizontal: 20, marginBottom: 8 }}>

				{/* Details */}
				<View style={{ flexDirection: 'row', marginBottom: 8 }}>
					<View style={{ top: 2 }}> 
						<Icon
							name="star-outline" 
							color="grey"
							size={16}
						/> 
					</View>
					<Text> { movieFull.vote_average }</Text>
					<Text style={{ marginLeft: 5 }}> -  {movieFull.genres.map(g => g.name).join(', ')}</Text>
				</View>

				{/* Overview */}
				<Text style={{ fontSize: 23, fontWeight: 'bold' }}>
					Overview
				</Text>

				<Text style={{ marginBottom: 8 }}>
					{ movieFull.overview }
				</Text>

				{/* Budget */}
				<Text style={{ fontSize: 23, fontWeight: 'bold' }}>
					Budget
				</Text>

				<Text>
					{ Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(movieFull.budget) }
				</Text>
			</View>
			<View style={{
				paddingBottom: 8,
			}}>
				<Text style={{ 
					color: 'black',
					fontSize: 23,
					fontWeight: 'bold',
					
					// TODO: create a global style for the margin
					marginHorizontal: 20,
					zIndex: 1,
				}}>
					Actores
				</Text>
				<FlatList
					horizontal
					data={cast}
					keyExtractor={ (actor) => actor.id.toString() }
					renderItem={ ({ item }) => <CastItem actor={item}/>}
					style={{
						marginTop: 10,
					}}
				/>
				{/* <CastItem actor={cast[0]}/> */}
			</View>
		</>

	)
}