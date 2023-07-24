import { createContext, useState } from "react";

export interface ContextProps {
	colors: ImageColors;
	prevColors: ImageColors;
	setPrevMainColors: (colors: ImageColors) => void;
	setMainColors: (colors: ImageColors) => void;
}

interface ImageColors {
	primary: 'transparent' | string;
	secondary: 'transparent' | string;
}

interface Props {
	children: JSX.Element;
}

export const GradientContext = createContext<ContextProps | null>(null)

export const GradientProvider = ({ children }: Props) => {
	const [colors, setColors] = useState<ImageColors>({
		primary: 'transparent',
		secondary: 'transparent'
	})

	const [prevColors, setPrevColors] = useState<ImageColors>({
		primary: 'transparent',
		secondary: 'transparent'
	})

	const setMainColors = ( colors: ImageColors) => {
		setColors( colors );
	}

	const setPrevMainColors = ( colors: ImageColors) => {
		setPrevColors( colors );
	}

	return (
		<GradientContext.Provider value={{
			colors,
			prevColors,
			setPrevMainColors,
			setMainColors,
		}}>
			{ children }
		</GradientContext.Provider>
	)
}