import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './AtividadeCriada.styles'
export default function AtividadeCriada(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.enunciado}>{props.Title}</Text>
        <Text style={styles.alternativas}>A)  {props.A}</Text>
        <Text style={styles.alternativas}>B)  {props.B}</Text>
        <Text style={styles.alternativas}>C)  {props.C}</Text>
        <Text style={styles.alternativas}>D)  {props.D}</Text>
        <Text style={styles.resposta}>Resposta correta: {props.Correct}</Text>
    </View>
  );
}