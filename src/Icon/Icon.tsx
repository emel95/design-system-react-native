import React from 'react';
import type { IIcon } from './Icon.type';

const Icon = ({ testID, name, type, size, color, style, onPress }: IIcon) => {
    const Tag = type
    if (type && name) {
        return (<Tag testID={testID} name={name} size={size} color={color} style={{ ...style }} onPress={onPress} />)
    }
    else {
        return (null)
    }
}
export default Icon;
