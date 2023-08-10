import { NativeModules, Platform } from "react-native";

export function invertRGBColor(rgbString: string) {
	// Extract the RGB components from the string
	const match = rgbString.match(/\d+/g);
	if (!match || match.length !== 3) {
	  throw new Error('Invalid RGB string format. Please provide a valid RGB string (e.g., "rgb(1, 1, 1)").');
	}
  
	// Convert the RGB components to numbers
	const [red, green, blue] = match.map(Number);
  
	// Invert the colors by subtracting them from 255
	const invertedRed = 255 - red;
	const invertedGreen = 255 - green;
	const invertedBlue = 255 - blue;
  
	// Generate the inverted RGB string
	const invertedRGBString = `rgb(${invertedRed}, ${invertedGreen}, ${invertedBlue})`;
	return invertedRGBString;
}

export function moviePosterURIBuilder(MoviePosterPath: string) {
	return `https://image.tmdb.org/t/p/w500/${MoviePosterPath}`
}

export function getDeviceLanguage() {
	// supported only english and spanish
	let deviceLanguage: string =
          Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier; // Android

	const [language, region] = deviceLanguage.split('_')
	if (language === 'es') {
		console.log('es');
		
		return "es-US"
	} else {
		return "en-US"
	}
}