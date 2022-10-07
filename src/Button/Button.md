# Button

### Usage

##### Button with children

```js
import {Button, Icon} from 'design-system-react-native';
import {MaterialIcons} from 'design-system-react-native/Icon/Icon.type';

<Button
  title={'click Me'}
  styleButton={{width: 10}}
  isRightChildren={false}
  styleText={{color: 'red'}}>
  <Icon type={MaterialIcons} name={'audiotrack'} size={19} color={'#fff'} />
</Button>;
```

or

##### Button without children

```js
import {Button} from 'design-system-react-native';
<Button
  title={'click Me'}
  styleButton={{width: 10}}
  styleText={{color: 'red'}}
/>;
```

| prop            | typeProp | default                                                                                                                                                         | description                                                                                                                                                                                                                                |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| isRightChildren | boolean  | false                                                                                                                                                           | If you have a child and you want it to be placed on the right side of the title, you set its value to true, if you want it to be placed on the left side, you set its value to false. Attention, these props are used if you have children |
| title           | string   |                                                                                                                                                                 | title Button                                                                                                                                                                                                                               |
| onPress         | function |                                                                                                                                                                 | onpress Button for example, onPress={()=>console.log('onpress button')}                                                                                                                                                                    |
| styleText       | object   | { fontSize: 18, color: '#fff', alignSelf: "center"}                                                                                                             | style for title for example, styleText={{padding: 100}} button                                                                                                                                                                             |
| styleButton     | object   | { flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between' ,backgroundColor: 'red',borderRadius: 10,paddingVertical: 5, paddingHorizontal: 12} | style for button for example, styleButton={{width: 100}}                                                                                                                                                                                   |

###### otherProps:

I used Pressable to make the button, you can use Pressable any other base (except onpress and style which
I have considered a separate prop for them) so you can use it:

```js
import {Button} from 'design-system-react-native';
<Button
  title={'click Me'}
  styleText={{color: 'red'}}
  styleButton={{width: 10}}
  onLongPress={() => console.log('Long press button')}
/>;
```
