import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Icon } from '../../../src';
import { MaterialIcons, AntDesign, Ionicons } from '../../../src/Icon/Icon.type';

storiesOf('Icon ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Icon small', () => (
    <Icon type={MaterialIcons} name={'local-fire-department'} size={15} color={'red'} />
  )).add('Icon large', () => (
    <Icon type={AntDesign} name={'like1'} size={35} color={'#000'} />
  ))