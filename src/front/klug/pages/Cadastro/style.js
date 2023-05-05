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
        paddingHorizontal: 30,
        width: '80%',
    },
    input: {
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: '#7F868E',
        smallMargin: 8,
        baseMargin: 14,
        basePadding: 14,
        baseRadius: 3,
        height: 40,
    },
    
    checkboxContainer: {
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',

       
    },
    checkboxaluno:{
      borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        small: 12,
        marginBottom: 26,
        marginTop: -3,
        marginRight: 10,
    },

      checkboxprofessor:{
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        small: 12,
        marginBottom: 26,
        marginTop: -3,
    },
    
    button: {
        width: '100%',
        marginBottom: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13315C'
    },

});

export default styles;