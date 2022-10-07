import { Pressable, Text, View, PressableProps } from "react-native";
import React, { useState, useCallback } from "react";
import { MaterialIcons } from '../Icon/Icon.type';
import { Icon } from '..';
import { styles } from './style';
import type { ICheckBox } from './CheckBox.type';


const CheckBox = <T extends Record<any, unknown>>({
    isCircle = false,
    title,
    isChecked = false,
    size = 24,
    colorCheck = 'red',
    textColor = '#000',
    iconRight = true,
    ...styleText
}: ICheckBox & T) => {
    const [active, setActive] = useState<boolean>(isChecked);
    const handelPress = useCallback(() => { setActive(prev => !prev) }, [active]);
    const iconName = active ? (isCircle ? "check-circle" : "check-box") : (isCircle ? "radio-button-unchecked" : "check-box-outline-blank");
    return (
        <Pressable style={[styles.container, iconRight ? { justifyContent: "flex-end" } : { justifyContent: "flex-start", }]}
            onPress={handelPress} testID="checkBox-test" >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }}>
                {!iconRight && <Icon type={MaterialIcons} name={iconName} size={size} color={colorCheck} testID="checkBox-icon-test" />}
                {title && <Text style={[styles.title, { color: textColor, ...styleText }]} testID="checkBox-text-test">{title}</Text>}
                {iconRight && <Icon type={MaterialIcons} name={iconName} size={size} color={colorCheck} testID="checkBox-icon-test" />}
            </View>
        </Pressable>
    );
};

export default CheckBox;