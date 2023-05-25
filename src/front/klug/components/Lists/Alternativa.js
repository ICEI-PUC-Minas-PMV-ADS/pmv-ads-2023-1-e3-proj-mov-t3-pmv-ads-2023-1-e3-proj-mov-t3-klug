import React from 'react';
import { Text } from 'react-native-paper';
import styles from "./Alternativa.styles";
import Checkbox from 'expo-checkbox';

export default function Alternativa(props) {
  return (
    <div style={styles.container}>
      <Checkbox style={styles.checkbox}/> 
      <Text style={{fontSize: 14, margin: 1, color: '#13315C', fontWeight: 'bold'}}>{props.Text}</Text>
    </div>
  );
}