import React from 'react';
import { View, Dimensions } from 'react-native';
import type { IGridList } from './GridList.type';
import { styles } from './style';

const { width } = Dimensions.get('screen');
const GridList = ({
    column,
    data,
    styleRow,
    styleLayout,
    ItemNode,
    styleItemModule,
    countItems,
    testID = 'layout-test'
}: IGridList) => {

    return (
        <View style={[styles.layout, { ...styleLayout }]} testID={testID}>
            {!countItems ?
                data?.map((item: any, index) => {
                    return (
                        <View testID={`layout-row-test${item._id}`}
                            style={[
                                styles.rowCloumn,
                                styleItemModule ? styleItemModule({ index, column, data, countItems }) : {},
                                {
                                    width: width / (column / 10 + column),
                                    ...styleRow
                                }]}
                            key={item._id}>
                            <ItemNode item={item} index={index} />
                        </View>
                    )
                }
                ) : data?.map((item: any, index) => {
                    if (countItems > index) {
                        return (
                            <View testID={`layout-row-test${item._id}`}
                                style={[
                                    styles.rowCloumn,
                                    styleItemModule ? styleItemModule({ index, column, data, countItems }) : {},
                                    {
                                        width: width / (column / 10 + column),
                                        ...styleRow
                                    }]}
                                key={item._id}>
                                <ItemNode item={item} index={index} />
                            </View>
                        )
                    } else {
                        return null;
                    }
                }
                )}
        </View>
    );

}

export default GridList;

