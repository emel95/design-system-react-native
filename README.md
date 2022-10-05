# design-system-react-native

**Design System React Native** is a set of components that gives you prototype faster with easy to use cross-platform components.

# Install

```
yarn add design-system-react-native

or

npm i design-system-react-native
```

## Note : To use icon and components that we used icon for their manufacture, such as modal and checkboxes, you have to do these Config for Android and iOS.

## android
Edit ``` android/app/build.gradle ``` ( NOT ```android/build.gradle``` ) and add the following:

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## ios
Go to the [link](https://github.com/oblador/react-native-vector-icons)  in the sectionios ios, do the canfig for iOS







# Usage

```
import { Button } from 'design-systemreact-native';

function App(){
  return (
     <Button title={'click here'}  />
  );
}
```

# Components included:

- Button
- Icon
- Badge
- CheckBox
- ModalC
- GridList

# Author

**Emel Mousavi**

# Contributing

Contributions, issues and feature requests are welcome!

# Show your support

Give a ⭐️ if this project helped you!
