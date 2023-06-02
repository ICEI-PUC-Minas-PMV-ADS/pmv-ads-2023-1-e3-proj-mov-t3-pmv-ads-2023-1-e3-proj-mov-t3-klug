import { StyleSheet } from 'react-native';
import { metrics } from '../../styles'


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        alignSelf: 'flex-start',
        margin: 0,
        flex: 1,
        padding: metrics.basePadding
    },
    title: {
        color: '#13315C',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'left',
        marginTop: 20,
        marginEnd: 10,
        marginLeft: 10
    }
});

export default styles;