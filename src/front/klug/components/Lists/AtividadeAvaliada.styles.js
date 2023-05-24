import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: '#ADD8E6',
        padding: 0,
        marginBottom: 10
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