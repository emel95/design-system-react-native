import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CheckBox } from '../../../src';
import CenterView from '../CenterView';


storiesOf('CheckBox ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('CheckBox Circle with text align right', () => (
    <CheckBox title="box1" size={20} isChecked={false} isCircle={true} iconRight={false} colorCheck='pink' />
  )).add('CheckBox Square without text', () => (
    <CheckBox isChecked={true} size={30} iconRight={false} colorCheck='blue' />
  )).add('CheckBox Square with text align left', () => (
    <CheckBox title="box3" size={40} isChecked={false} isCircle={false} iconRight={true} colorCheck='red' />
  ))