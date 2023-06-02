import React from 'react';
import {View} from 'react-native';
import { Text } from 'react-native-paper';
import styles from "./AtividadeAvaliada.styles";

export default function AtividadeAvaliada(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={{fontSize: 18, margin: 3, color: '#13315C', fontWeight:'bold'}}>{props.NomeAtividade}</Text>
        <Text style={{fontSize: 16, margin: 2, color: 'black'}}>{props.NomeProfessor}</Text>
        <Text style={{fontSize: 12, margin: 2, color: 'black'}}>Avaliada em {props.DataPublicação}</Text>
      </View>
      <View style={styles.containerNota}>
        <Text style={{fontSize: 16, margin: 3, color: 'black'}}>Nota: {props.NotaAluno} / {props.Total}</Text>
      </View>
    </View>
  );
}