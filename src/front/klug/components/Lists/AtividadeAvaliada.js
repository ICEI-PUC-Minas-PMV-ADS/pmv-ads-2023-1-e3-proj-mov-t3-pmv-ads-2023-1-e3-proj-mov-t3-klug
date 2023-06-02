import React from 'react';
import {View} from 'react-native';
import { Text } from 'react-native-paper';
import styles from "./AtividadeAvaliada.styles";

export default function AtividadeAvaliada(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={{fontSize: 12, margin: 3, color: '#13315C'}}>{props.NomeAtividade}</Text>
        <Text style={{fontSize: 14, margin: 2, color: '#13315C'}}>{props.NomeProfessor}</Text>
        <Text style={{fontSize: 10, margin: 2, color: '#13315C'}}>Avaliada em {props.DataPublicação}</Text>
      </View>
      <View style={styles.containerNota}>
        <Text style={{fontSize: 12, margin: 3, color: '#13315C'}}>Nota: {props.NotaAluno} / {props.Total}</Text>
      </View>
    </View>
  );
}