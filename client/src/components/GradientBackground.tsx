import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from "react-native-linear-gradient"
import { useContext, useEffect } from "react";
import { GradientContext } from "../context/GradientContext";
import { useFade } from '../hooks/useFade';
import { useTheme } from '@react-navigation/native';

interface Props {
	children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

	// TODO: check this '!' loggin in the GradientContext to check the renders
	const { colors, prevColors, setPrevMainColors } = useContext(GradientContext)!;
	const { opacity, fadeIn, fadeOut } = useFade({ duration:175, initialOpacity: 1 });
	const theme = useTheme();

	useEffect(() => {
		fadeIn( () => {
			setPrevMainColors( colors );
			fadeOut();
		})
	}, [colors])
	
	return (
		<View style={{
			flex: 1,
			// backgroundColor: '#084F6A'
		}}>
			<LinearGradient
				colors={[ prevColors.primary, prevColors.secondary, theme.colors.background ]}
				style = {{ ...StyleSheet.absoluteFillObject }}
				start= {{ x: 0.1, y: 0.1 }}
				end={{ x: 0.5, y: 0.7}}
			/>

			<Animated.View
				style={{
					...StyleSheet.absoluteFillObject,
					opacity
				}}	
				>
					<LinearGradient
						colors={[ colors.primary, colors.secondary, theme.colors.background]}
						style = {{ ...StyleSheet.absoluteFillObject }}
						start= {{ x: 0.1, y: 0.1 }}
						end={{ x: 0.5, y: 0.7}}
					/>
			</Animated.View>
			{ children }
		</View>
	)
}