import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
/* import styles from './Menuprofstyles'; */

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button1}>
        <Feather name="circle" size={30} color="#8eabcc"
        style={{backgroundColor: '#8eabcc', borderRadius: 30}} />
          <Text style={styles.buttonText}>Criar atividade         </Text>
          <Feather name="edit" size={22} color="#134074"  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
        <Feather name="circle" size={30} color="#3c79aa"
        style={{backgroundColor: '#3c79aa', borderRadius: 30}} />
          <Text style={styles.buttonText}>Verificar atividade    </Text>
          <Feather name="arrow-right" size={24} color="#134074" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '',
  },
  buttonsContainer:{
    backgroundColor: '#FFF',
    width: '100%',
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 10,
  },
  
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#134074',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default MenuScreen;