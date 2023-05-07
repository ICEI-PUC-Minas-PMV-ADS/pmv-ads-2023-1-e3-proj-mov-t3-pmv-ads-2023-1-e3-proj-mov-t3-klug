import { StyleSheet, Dimensions } from 'react-native';

const KlugInputStyles = StyleSheet.create({
    input: {
        width: Dimensions.get('window').width > 768 ? 800 : 320,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 0,
        padding: 3,
    }
});

export default KlugInputStyles;