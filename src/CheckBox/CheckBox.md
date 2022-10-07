# CheckBox

### Usage

```js
import {CheckBox} from 'design-system-react-native';
<CheckBox
  title="box3"
  size={40}
  isChecked={false}
  isCircle={false}
  iconRight={true}
  colorCheck="red"
/>;
```

| prop       | typeProp | default                                     | description                                                                                                                         |
| ---------- | -------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| title      | string   |                                             | title for checkBox                                                                                                                  |
| isChecked  | boolean  | false                                       | The initial value of the checkbox is checked or not                                                                                 |
| size       | number   | 24                                          | checkBox size                                                                                                                       |
| colorCheck | string   | 'red'                                       | The color of the tick in the checkbox                                                                                               |
| textColor  | string   | '#000'                                      | The color of the checkbox title                                                                                                     |
| iconRight  | boolean  | true                                        | The checkbox is on the left or right side of the title. If its value is true, the checkbox is placed on the right side of the title |
| isCircle   | boolean  | false                                       | The checkbox can be square or circle, if its value is true, the checkbox is circle, if it is also folded, it is square              |
| styleText  | object   | {fontSize: 16,color: '#000', marginLeft: 5} | Custom style for checkbox title,for example styleText={{fontSize: 12}}                                                              |
