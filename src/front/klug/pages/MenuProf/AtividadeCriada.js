import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './AtividadeCriada.styles'

export default function AtividadeCriada(props) {
  return (
    <View>
        <Text style={styles.text}>Questão: {props.Title}</Text>
        <Text style={styles.text}>A. {props.A}</Text>
        <Text style={styles.text}>B. {props.B}</Text>
        <Text style={styles.text}>C. {props.C}</Text>
        <Text style={styles.text}>D. {props.D}</Text>
        <Text style={styles.text}>Resposta correta: {props.Correct}</Text>
    </View>
  );
}