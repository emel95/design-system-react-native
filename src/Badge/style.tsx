import { StyleSheet, Platform } from 'react-native';
const styles = StyleSheet.create({
    badgeCard: {
        position: 'absolute',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            android: {
                elevation: 5,
            },
            ios: {
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowColor: '#000',
                shadowOpacity: 0.25,
                shadowRadius: 3,
            },
        }),
    },
});
export { styles };