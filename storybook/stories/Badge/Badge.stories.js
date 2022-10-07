import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Badge, Icon } from '../../../src';
import { MaterialIcons, Ionicons } from '../../../src/Icon/Icon.type';
import { View, Text } from 'react-native';

storiesOf('Badge ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Badge text', () => (
    <Badge
      size={40}
      onPress={() => console.log('onpress')}
      onTouchMove={() => console.log('touch move')}>
      <Text style={{ color: '#fff' }}> 1</Text>
    </Badge>
  )).add('Badge text and icon', () => (
    <Badge
      size={50}
      styleBadge={{ backgroundColor: 'blue' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Icon type={Ionicons} name={'at'} size={20} color={'#fff'} />
        <Text style={{ color: '#fff' }}> 2</Text>
      </View>

    </Badge>
  )).add('Badge icon', () => (
    <Badge
      size={60}>
      <Icon type={MaterialIcons} name={'local-fire-department'} size={40} color={'#fff'} />
    </Badge>
  ))