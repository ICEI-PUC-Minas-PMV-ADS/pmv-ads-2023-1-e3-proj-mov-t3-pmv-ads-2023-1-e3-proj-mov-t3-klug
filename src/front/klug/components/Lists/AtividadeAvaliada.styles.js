import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
    },
    containerInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'baseline',
        alignSelf: 'center',
        margin: 0,
        
    },
    containerNota: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});

export default styles;