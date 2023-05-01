import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginTop: 60,
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#134074',
    },
    Logo: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    form: {
        paddingHorizontal: 10
    },
    input: {
        marginBottom: 20,
        width: '100%',
        borderRadius: 10,
        borderWidth: 0,
    },
    lostpsw: {
        marginBottom: 20,
        alignSelf: 'center',
        textAlign: 'right',
        color: 'black'
    },
    button: {
        width: '100%',
        marginBottom: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 0,
        backgroundColor: '#134074'
    },
});

export default styles;