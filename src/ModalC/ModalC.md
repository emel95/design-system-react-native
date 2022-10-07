# Modal

### Usage

```js
import {Button, ModalC} from 'design-system-react-native';
<ModalC open={true} onClose={() => console.log('close modal')}>
  <Text>this is test modal </Text>
  <Button title="More ..." />
</ModalC>;
```

| prop       | typeProp | default                                                                                                                                                                                                                                                               | description                                                                                                                                                                              |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onClose    | function | There is a function that closes the modal by clicking on icon Close                                                                                                                                                                                                   | The function we want to be executed when the close icon is clicked ,for example, onClose={()=>console.log('onpress icon close')}                                                         |
| open       | boolean  |                                                                                                                                                                                                                                                                       | This prop is mandatory and we must give it a value. If the value of this prop is true, it will show the modal, otherwise, if the value is false, it will not show the modal.             |
| top        | number   | 0                                                                                                                                                                                                                                                                     | When displaying the modal, it determines its distance from the top of the page. Note that it displays the middle of the page by default because of the default style I gave to my modal. |
| styleModal | object   | {marginTop: top,height: 500 / 2,width: '90%',alignItems: 'center',alignSelf: 'center',paddingVertical: 500 / 20,borderRadius: 15,backgroundColor: '#fff',shadowColor: '#000',shadowOffset: {width: 0,height: 7},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15} | style for modal                                                                                                                                                                          |
| colorClose | string   | 'red'                                                                                                                                                                                                                                                                 | close icon color in modal                                                                                                                                                                |
| sizeClose  | number   | 24                                                                                                                                                                                                                                                                    | close icon size in modal                                                                                                                                                                 |
| styleClose | object   | {alignSelf: 'flex-start',alignItems: 'center', justifyContent: 'center',padding: 5,marginLeft:10 }                                                                                                                                                                    | Style for close icon in modal                                                                                                                                                            |

###### otherProps:

I used Modal to make the ModalC, you can use Modal any other base (except **animationType={"fade"},transparent ,visible ,onRequestClose** which I have considered a separate prop for them) so you can use it:

```js
<ModalC
  open={true}
  onClose={() => console.log('close modal')}
  onTouchEnd={() => console.log('onTouchEnd')}
  styleModal={{backgroundColor: '#c026d3'}}>
  <Text>hi world</Text>
</ModalC>
```
