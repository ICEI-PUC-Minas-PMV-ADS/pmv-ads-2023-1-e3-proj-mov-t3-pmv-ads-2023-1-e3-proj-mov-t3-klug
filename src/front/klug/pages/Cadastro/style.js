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
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        
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
        marginTop: 30,
        borderRadius: 0,
        backgroundColor: '#134074'
    }, 

    chbxText: {
        color: '#134074',
    }

});

export default styles;