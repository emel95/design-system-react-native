import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import type { IBadge } from './Badge.type';
import { styles } from './style';

const Badge = ({
    onPress = () => { },
    styleBadge,
    testId,
    children,
    visibale = true,
    size = 20,
    top = 100,
    left = 100,
}: IBadge) => {
    if (!visibale) return null;
    return (
        <Pressable testID={testId} onPress={onPress}
            style={[styles.badgeCard, {
                borderRadius: size / 2,
                top: top,
                left: left,
                width: size,
                height: size,
                ...styleBadge
            }]} >
            {children}
        </Pressable>
    )
}
export default Badge;

