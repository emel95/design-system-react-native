import { StyleSheet, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        marginTop: 10,
    },
    cardList: {
        alignSelf: 'center',
        marginVertical: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: 'red',
        borderWidth: 1,
        height: SCREEN_WIDTH / 2.9,
        width: SCREEN_WIDTH / 2.3,
    },
    text: {
        color: '#000',
        fontSize: 17,
    }
});
export { styles };
