const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
// const { resolve } = require('path');
const path = require('path');

const extraNodeModules = {	
	'common': path.resolve(__dirname + '/../common'),
}

const watchFolders = [
	path.resolve(__dirname, '../common'),
]

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const config ={
	resolver: {
		// extraNodeModules: {	
		// 	'common': path.resolve(__dirname + '/../common'),
		// },
		extraNodeModules: new Proxy(extraNodeModules, {
			get: (target, name) =>
			//redirects dependencies referenced from common/ to local node_modules
			name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
		}),
	},
	watchFolders
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
