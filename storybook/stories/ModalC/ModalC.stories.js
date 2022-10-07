import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Button, ModalC } from '../../../src';
import { Text } from 'react-native';

storiesOf('ModalC ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Modal 1', () => (
    <ModalC open={true} onClose={() => console.log('close modal')}
      styleModal={{ backgroundColor: '#c026d3' }}>
      <Text>hi world</Text>
    </ModalC>
  )).add('Modal 3', () => (
    <ModalC open={true} onClose={() => console.log('close modal')}>
      <Text>this is test modal </Text>
      <Button title='More ...' />
    </ModalC>
  ))