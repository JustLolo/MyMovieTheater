import { Animated, Button, View } from "react-native"
import { useFade } from "../hooks/useFade";

export const FadeScreen = () => {
	const fade = useFade();

	return (
		<View style = {{
			flex: 1,
			backgroundColor: 'gray',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Animated.View style={{
				backgroundColor: '#084F6A',
				width: 150,
				height: 150,
				borderColor: 'white',
				borderWidth: 10,
				marginBottom: 10,
				opacity: fade.opacity,
			}}/>

			<Button
				title="FadeIn"
				onPress={ () => fade.fadeIn() }
			/>

			<View style={{ marginBottom: 30 }}/>

			<Button
				title="FadeOut"
				onPress={ () => fade.fadeOut() }
			/>
		</View>
	)
}