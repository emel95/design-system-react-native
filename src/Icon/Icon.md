# Icon

### Usage

```js
import {Icon} from 'design-system-react-native';
import {MaterialIcons} from 'design-system-react-native/src/Icon/Icon.type';
<Icon
  type={MaterialIcons}
  name={'local-fire-department'}
  size={15}
  color={'red'}
/>;
```



| prop    | typeProp                                                                                                                                                                      | description                                                                                |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| name    | string                                                                                                                                                                        | name Icon for example, name={'local-fire-department'}                                      |
| type    | AntDesign, FontAwesome , FontAwesome5, Ionicons, Feather,MaterialCommunityIcons ,Entypo , MaterialIcons, SimpleLineIcons, Octicons, Foundation , EvilIcons ,Fontisto , Zocial | Type the icon of one of the items in the typeProp column for example, type={MaterialIcons} |
| size    | number                                                                                                                                                                        | for example, size={14}                                                                     |
| color   | string                                                                                                                                                                        | for example, color={'#fff'}                                                                |
| style   | object                                                                                                                                                                        | for example, style={{backgroundColor: '#000'}}                                             |
| onPress | function                                                                                                                                                                      | for example, onPress={()=>console.log('onpress icon')}                                     |
