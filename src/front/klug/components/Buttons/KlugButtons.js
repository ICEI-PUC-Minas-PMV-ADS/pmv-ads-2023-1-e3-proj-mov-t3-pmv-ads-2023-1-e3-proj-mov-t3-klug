import React from 'react';
import { Button, Text } from 'react-native-paper';
import KlugButtonsStyles from './KlugButtonsStyle';

const KlugButton = (props) => (
  <Button 
    mode="contained" 
    style={KlugButtonsStyles.button} 
    onPress={props.onPress}>
    <Text style={{color: 'white'}}>{props.title}</Text>
  </Button>
);

export default KlugButton;

