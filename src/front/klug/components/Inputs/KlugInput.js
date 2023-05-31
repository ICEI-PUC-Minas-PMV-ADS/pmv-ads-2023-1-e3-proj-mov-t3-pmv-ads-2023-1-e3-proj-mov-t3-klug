import React from 'react';
import { TextInput, DefaultTheme } from 'react-native-paper';
import KlugInputStyles from "./KlugInputStyle";

const KlugInput = (props) => (

    <TextInput
      label={props.label}
      mode="outlined"
      defaultValue={props.defaultValue}
      style={KlugInputStyles.input}
      onChangeText={props.handleInput}
      secureTextEntry={props.security}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          text: 'black', // Define a cor do texto como preto
        },
      }}
      />
);

export default KlugInput