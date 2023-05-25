import React from 'react';
import { Text } from 'react-native-paper';
import styles from "./AtividadePublicada.styles";

export default function AtividadePublicada(props) {
  return (
    <div style={styles.container}>
      <div style={styles.containerInfo}>
        <Text style={{fontSize: 20, margin: 3, color: '#13315C'}}>{props.NomeAtividade}</Text>
        <Text style={{fontSize: 18, margin: 2, color: '#13315C'}}>{props.NomeProfessor}</Text>
        <Text style={{fontSize: 16, margin: 2, color: '#13315C'}}>Publicado em {props.DataPublicação}</Text>
      </div>
      <div style={styles.containerNota}>
        <Text style={{fontSize: 15, margin: 3, color: '#13315C'}}>Valor: {props.Total}</Text>
      </div>
    </div>
  );
}