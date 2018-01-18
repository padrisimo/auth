# Auth React-Native App

React Native Authentication App using Firebase.

### After cloning

```
> yarn
```
or

```
> npm install
```

in other terminal (to run in android device or emulator)

```
> react-native run-android
```

After have a build on devide or simulator if u set the Debug server host in the app u just need to:

```
> react-native start
```

### Misc

U need 2 build an apikey.js file in the root directory with the the firebase config code and exporting it (as the example below) becasue I ignore this file regarding security issues in a public repo. 

```javascript
export const apiKey = {
    apiKey: **,
    authDomain: **,
    databaseURL: **,
    projectId: **,
    storageBucket: **,
    messagingSenderId: **
};
```

