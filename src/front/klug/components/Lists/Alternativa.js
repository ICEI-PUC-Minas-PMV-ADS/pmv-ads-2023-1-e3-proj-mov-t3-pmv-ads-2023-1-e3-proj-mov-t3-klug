import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import styles from "./Alternativa.styles";
import Checkbox from 'expo-checkbox';

export default function Alternativa(props) {

  const [selected, setSelected] = useState(false);

  const setSelection = (selectedValue) => {
    setSelected(selectedValue)
    props.handleQuestionAnswer(props.IdQuestion, props.IdAnswer, selectedValue);
  }

  return (
    <div style={styles.container}>
      <Checkbox style={styles.checkbox} 
          value={selected}
          onValueChange={setSelection}/> 
      <Text style={{fontSize: 14, margin: 1, color: '#13315C', fontWeight: 'bold'}}>{props.Text}</Text>
    </div>
  );
}