import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    overlayModal: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: `${'#64748b'}80`,
        padding: 16,
    },
    cardModal: {
        height: 500 / 2,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 500 / 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    iconClose: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginLeft: 10,
    }
});
export { styles };
