import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: 25,
    },
    title: {
        textAlign:'center',
        fontSize: 18,
        fontWeight:'bold',
        color: '#13315C',
    },
    subTitle: {
        textAlign:'center',
        fontSize: 15,
        color: '#13315C',
    },
    descEmail: {
        textAlign:'left',
        fontWeight:'bold',
        color: '#13315C',
    },
    emailContainer: {
        marginTop: 100,
    },
    input: {
        height: 55,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        fontSize: 18,
        borderRadius: 20,
        backgroundColor: '#EEF4ED'
    }, 
    buttonContainer: {
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#13315C',
        borderRadius: 10,
        marginTop: 20
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default styles;