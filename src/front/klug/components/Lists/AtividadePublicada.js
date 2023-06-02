import React from 'react';
import { Text } from 'react-native-paper';
import {View} from 'react-native';
import styles from "./AtividadePublicada.styles";

export default function AtividadePublicada(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={{fontSize: 16, margin: 3, color: '#13315C', fontWeight:'bold'}}>{props.NomeAtividade}</Text>
        <Text style={{fontSize: 14, margin: 2, color: 'black'}}>{props.NomeProfessor}</Text>
        <Text style={{fontSize: 12, margin: 2, color: 'black'}}>Publicado em {props.DataPublicação}</Text>
      </View>
      <View style={styles.containerNota}>
        <Text style={{fontSize: 14, margin: 3, color: 'black'}}>Valor: {props.Total}</Text>
      </View>
    </View>
  );
}