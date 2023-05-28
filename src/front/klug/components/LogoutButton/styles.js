import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: 'center',
      },

    button: {
        marginBottom: 10,
        height: 50,
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 0,
        backgroundColor: '#134074',
        width: '100%'
    },
    
    label: {
      fontSize: 15,
      color: '#EEF4ED',
    },

    content: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
      },

  });
 

  export default styles;