import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Button, Icon } from '../../../src';
import { MaterialIcons } from '../../../src/Icon/Icon.type';
import style from './styles';

storiesOf('Btn ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Button with text and icon left', () => (
    <Button title={'click Me'} styleButton={style.btn1} isRightChildren={false} >
      <Icon type={MaterialIcons} name={'audiotrack'} size={19} color={'#fff'} />
    </Button>
  )).add('Button with text ', () => (
    <Button title={'click Me'} styleButton={style.btn2} />
  )).add('Button with text and icon right', () => (

    <Button title={'click Me '} styleButton={style.btn3} isRightChildren={true}>
      <Icon type={MaterialIcons} name={'backup'} size={20} color={'#fff'} />
    </Button>
  ))