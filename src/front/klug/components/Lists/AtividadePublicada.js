import React from 'react';
import { Text } from 'react-native-paper';
import {View} from 'react-native';
import styles from "./AtividadePublicada.styles";

export default function AtividadePublicada(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={{fontSize: 12, margin: 3, color: '#13315C'}}>{props.NomeAtividade}</Text>
        <Text style={{fontSize: 14, margin: 2, color: '#13315C'}}>{props.NomeProfessor}</Text>
        <Text style={{fontSize: 10, margin: 2, color: '#13315C'}}>Publicado em {props.DataPublicação}</Text>
      </View>
      <View style={styles.containerNota}>
        <Text style={{fontSize: 12, margin: 3, color: '#13315C'}}>Valor: {props.Total}</Text>
      </View>
    </View>
  );
}