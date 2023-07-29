# Amovie

# How 'It works in my computer'
Why? Wasting hours trying to make something work is an issue for many people, so, I'm using this at this moment
```bash
# OS: Windows 10
$ chocolatey -v
1.1.0

# java: installed using Chocolatey (or Android Studio, can't remember rn)
$ java -version
openjdk version "11.0.18" 2023-01-17 LTS
OpenJDK Runtime Environment Microsoft-7208460 (build 11.0.18+10-LTS)
OpenJDK 64-Bit Server VM Microsoft-7208460 (build 11.0.18+10-LTS, mixed mode)

# nvm: installed using Chocolatey
$ nvm -v
1.1.10

# node: using nvm
$ node -v
v18.16.0

$ yarn -v
1.22.19
```

### **API** documentation: 
* [General](https://developer.themoviedb.org/)
* [Used in this project](https://developer.themoviedb.org/reference/movie-now-playing-list)

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


# TODO List
- [ ] Add environment variables explanation (order) to the readme
- [ ] check TODOS around the codebase
- [ ] Remove/Find that warning/error I am getting (I know i shouldn't)
```
grep -nr 'ViewPropTypes will be removed from' ./node_modules/react-native --include=\*.js 
OR
Open `Warning searcher.code-search` file on VSCODE
```

# Backend
### Running on a cloudflare worker
You can create your account [here](https://dash.cloudflare.com/sign-up).
* https://server.YOUR_ACCOUNT_HERE.workers.dev/

### Why am I using a backend?
* No matter how, there is no way I can 'encript' a key/token in the final android/ios bundle.
* Some easy reverse engineer and someone would get the key/token.
* This this is using cloudflare workers
* you need to login first using: `npx wrangler login`

So I need a backend to act as a wrapper of the movie api.
This backend will have the acces to the API key/token and will serve the required information from the movie endpoint.



This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting
If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

### Styles aren't updating properly
```
yarn start:reset-cache
```

### Clean reinstall
```bash
# Android
cd android && \
./gradlew clean && \
rm -rf ./build && \
rm -rf ./app/build && \
rm -rf ./.gradle && \
# iOS
# pending :3

# JS
cd .. && \
rm -rf ./node_modules && \
yarn cache clean && \
yarn install && \
yarn start:reset-cache
```




# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
