import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { GridList } from '../../../src';
import { styles } from './styles';
import { Text, View } from 'react-native';
import layoutBorder from './layoutBorder';

data = [
  { id: '1', title: 'آرایشی بهداشتی ' },
  { id: '2', title: 'لباس،کفش وجوهرات' },
  { id: '3', title: 'کالای دیجیتال' },
  { id: '4', title: 'لوازم خودرو' },
  { id: '5', title: 'کتاب و لوازم التحریر ' },
  { id: '6', title: 'ورزش و سفر' },
  { id: '7', title: 'خانه و باغچه' },
  { id: '8', title: 'اسباب بازی' },
  { id: '9', title: 'فیلم و موسیقی' },
];

storiesOf('GridList ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('GridList square card', () => (
    <GridList
      countItems={4}
      styleLayout={styles.layout}
      styleRow={{ marginHorizontal: 4 }}
      column={2}
      data={data}
      ItemNode={({ item, index }) =>
      (<View
        style={styles.cardList}
      >
        <Text style={styles.text}>{item.title}</Text>
      </View>
      )}
    />
  )).add('GridList border center card', () => (
    <GridList
      countItems={6}
      styleRow={{ height: 250 }}
      styleLayout={{ marginLeft: 18 }}
      styleItemModule={layoutBorder}
      column={2}
      data={data}
      ItemNode={({ item, index }) =>
      (<View
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={styles.text}>{item.title}</Text>
      </View>

      )}
    />
  ))