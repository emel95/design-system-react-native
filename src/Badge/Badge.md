# Badge

### Usage

```js
import {Badge, Icon} from 'design-system-react-native';
import {Ionicons} from 'design-system-react-native/Icon/Icon.type';
<Badge size={50} styleBadge={{backgroundColor: 'blue'}}>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Icon type={Ionicons} name={'at'} size={20} color={'#fff'} />
    <Text style={{color: '#fff'}}> 2</Text>
  </View>
</Badge>;
```

| prop       | typeProp | default                                                                                                                                                                                                                                                                                                          | description                                                                                                                             |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| styleBadge | object   | {position: 'absolute',borderRadius: size / 2,top: top,left: left,width: size,height: size,backgroundColor: 'red',alignItems: 'center',justifyContent: 'center',...Platform.select({android: {elevation: 5,},ios:{shadowOffset: {width: 0,height: 2,},shadowColor: '#000',shadowOpacity: 0.25,shadowRadius: 3}})} | Custom style for badge for example, stylstyleBadge={{width: 100,height:50}}                                                             |
| onPress    | function |                                                                                                                                                                                                                                                                                                                  | onPress for the badge, when we click on the badge for example,onPress={()=>console.log('onpress badge')}                                |
| visibale   | boolean  | true                                                                                                                                                                                                                                                                                                             | When its value is false, our badge will be hidden and will not be displayed. If it is true, it will be displayed                        |
| size       | number   | 20                                                                                                                                                                                                                                                                                                               | The size of the badge is actually the size of the width and height of the badge, because the default style I gave the badge is circular |
| top        | number   | 100                                                                                                                                                                                                                                                                                                              | Badge distance from the top side of the screen                                                                                          |
| left       | number   | 100                                                                                                                                                                                                                                                                                                              | Badge distance from the left side of the screen                                                                                         |
