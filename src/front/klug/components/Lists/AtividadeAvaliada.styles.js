import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#fff',
        padding: 0,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        marginLeft: 6,
        marginRight: 6
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