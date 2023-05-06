import { StyleSheet, Dimensions } from 'react-native';

const KlugInputStyles = StyleSheet.create({
    input: {
        marginBottom: 20,
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 10,
        borderWidth: 0,
    }
});

export default KlugInputStyles;