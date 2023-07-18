import { Image, StyleSheet, Text, View } from "react-native"
import { Cast } from "../interfaces/creditsInterface"

interface Props {
	actor: Cast,
}

export const CastItem = ({ actor }: Props) => {
	// console.log(actor.name);
	// TODO: check fro undefined actor.profile_path
	const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path ?? ''}`

	return (
		<View style={ styles.container }>
			{ 
				(actor.profile_path != undefined) && 
				<Image
					source={{ uri }}
					style={{ width:50, height:50, borderRadius:10 }}
				/>
			}
			

			<View style={ styles.actorInfo }>
				<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>
					{ actor.name }
				</Text>
				<Text style={{ color: 'black', fontSize: 15, opacity: 0.7 }}>{ actor.character }</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',

		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.29,
		shadowRadius: 7,
		top: 0,

		elevation: 7,
		backgroundColor: 'white',

		paddingRight: 10,
		paddingLeft: 1,
		paddingBottom: 1,
		paddingTop: 1,
		
		marginRight: 20,
		marginBottom: 30,

		// create a global variable for the margin
		marginLeft: 20,
		
		// borderWidth: 1,
		// borderColor: 'red',
	},
	actorInfo: {
		marginLeft: 10,
		marginTop: -1,
	}
})